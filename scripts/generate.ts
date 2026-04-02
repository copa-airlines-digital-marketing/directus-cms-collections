#!/usr/bin/env node

import { config } from 'dotenv';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  fetchCollections,
  fetchFields,
  filterSystemCollections,
} from './directus/api.js';
import { normalizeCollection } from './directus/normalize.js';
import type { NormalizedCollection } from './directus/normalize.js';
import { deprecateStaleCollections } from './output/cleanup.js';
import {
  emitCollectionFile,
  emitIndexFile,
  emitSchemaFile,
} from './output/emit.js';
import {
  resolveDirectusStaticToken,
  resolveDirectusUrl,
} from './lib/directusEnv.js';

// Load environment variables
config();

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const OUTPUT_DIR = join(__dirname, '..', 'src', 'generated');

/**
 * Main generator function
 */
async function generate(): Promise<void> {
  const startTime = Date.now();

  console.log('🚀 Starting Directus schema generation...\n');

  // Step 1: Read and validate environment variables
  const DIRECTUS_URL = resolveDirectusUrl();
  const DIRECTUS_STATIC_TOKEN = resolveDirectusStaticToken();

  if (!DIRECTUS_URL || !DIRECTUS_STATIC_TOKEN) {
    console.error('❌ Error: Missing required environment variables');
    console.error(
      '   Set DIRECTUS_URL and DIRECTUS_STATIC_TOKEN (or DIRECTUS_TOKEN) in Doppler, then: pnpm generate',
    );
    console.error('   Or use a .env file with: pnpm generate:local');
    process.exit(1);
  }

  // Remove trailing slash from URL if present
  const baseUrl = DIRECTUS_URL.replace(/\/$/, '');

  console.log(`📡 Connecting to: ${baseUrl}`);

  try {
    // Step 2: Fetch collections list
    console.log('📦 Fetching collections...');
    const allCollections = await fetchCollections(
      baseUrl,
      DIRECTUS_STATIC_TOKEN,
    );
    const collections = filterSystemCollections(allCollections);

    console.log(`   Found ${allCollections.length} total collections`);
    console.log(`   Processing ${collections.length} non-system collections\n`);

    if (collections.length === 0) {
      console.warn('⚠️  No non-system collections found. Nothing to generate.');
      return;
    }

    // Step 3: Fetch fields for each collection and normalize
    console.log('🔍 Fetching fields and normalizing...');
    const normalizedCollections: NormalizedCollection[] = [];
    const warnings: string[] = [];

    for (const collection of collections) {
      try {
        const fields = await fetchFields(
          baseUrl,
          DIRECTUS_STATIC_TOKEN,
          collection.collection,
        );

        if (fields.length === 0) {
          warnings.push(
            `Collection "${collection.collection}" has no fields, skipping`,
          );
          continue;
        }

        const normalized = normalizeCollection(collection.collection, fields);
        normalizedCollections.push(normalized);

        console.log(`   ✓ ${collection.collection} (${fields.length} fields)`);
      } catch (error) {
        warnings.push(
          `Failed to fetch fields for "${collection.collection}": ${(error as Error).message}`,
        );
      }
    }

    console.log();

    // Sort collections by name for stable output
    normalizedCollections.sort((a, b) => a.name.localeCompare(b.name));

    // Step 4: Deprecate stale collections (instead of deleting)
    console.log('🏷️  Marking removed collections as deprecated...');
    const currentFileNames = new Set(
      normalizedCollections.map((col) => col.fileName),
    );
    const deprecated = await deprecateStaleCollections(
      OUTPUT_DIR,
      currentFileNames,
    );

    if (deprecated.length > 0) {
      console.log(`   ⚠️  Deprecated ${deprecated.length} collection(s):`);
      deprecated.forEach((d) =>
        console.log(`      - ${d.collectionName} (${d.fileName}.ts)`),
      );
      console.log(`   💡 These files are kept for backward compatibility.`);
      console.log(
        `   💡 To remove old deprecated collections, run: pnpm clean:deprecated`,
      );
    } else {
      console.log('   ✓ No collections to deprecate');
    }

    console.log();

    // Step 5: Generate collection files
    console.log('📝 Generating collection files...');
    for (const collection of normalizedCollections) {
      await emitCollectionFile(OUTPUT_DIR, collection);
      console.log(`   ✓ ${collection.fileName}.ts`);
    }

    console.log();

    // Step 6: Generate index and schema files
    console.log('📝 Generating index and schema files...');
    await emitIndexFile(OUTPUT_DIR, normalizedCollections);
    console.log('   ✓ index.ts');

    await emitSchemaFile(OUTPUT_DIR, normalizedCollections);
    console.log('   ✓ schema.ts');

    console.log();

    // Step 7: Print summary
    const duration = Date.now() - startTime;
    console.log('✅ Generation complete!\n');
    console.log('📊 Summary:');
    console.log(`   Collections processed: ${normalizedCollections.length}`);
    console.log(
      `   Total fields: ${normalizedCollections.reduce((sum, col) => sum + col.fields.length, 0)}`,
    );
    console.log(`   Output directory: ${OUTPUT_DIR}`);
    console.log(`   Duration: ${duration}ms`);

    if (warnings.length > 0) {
      console.log('\n⚠️  Warnings:');
      warnings.forEach((warning) => console.log(`   - ${warning}`));
    }

    console.log('\n💡 Next steps:');
    console.log('   - Run `pnpm typecheck` to verify generated types');
    console.log('   - Run `pnpm test` to run smoke tests');
  } catch (error) {
    console.error('\n❌ Generation failed:', (error as Error).message);
    console.error((error as Error).stack);
    process.exit(1);
  }
}

// Run generator
generate();
