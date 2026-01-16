#!/usr/bin/env node

import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { removeDeprecatedCollections } from './output/cleanup.js';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const OUTPUT_DIR = join(__dirname, '..', 'src', 'generated');

/**
 * Script to manually clean up deprecated collections
 *
 * Usage:
 *   pnpm clean:deprecated           # Remove collections deprecated > 30 days ago
 *   pnpm clean:deprecated -- --days 7   # Remove collections deprecated > 7 days ago
 *   pnpm clean:deprecated -- --all      # Remove all deprecated collections
 */
async function cleanDeprecated(): Promise<void> {
  console.log('🧹 Cleaning deprecated collections...\n');

  // Parse command line arguments
  const args = process.argv.slice(2);
  let days = 30; // Default: 30 days
  let removeAll = false;

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--days' && args[i + 1]) {
      days = parseInt(args[i + 1], 10);
      if (isNaN(days)) {
        console.error('❌ Error: --days must be a number');
        process.exit(1);
      }
    } else if (args[i] === '--all') {
      removeAll = true;
      days = 0; // Remove everything
    }
  }

  if (removeAll) {
    console.log('⚠️  WARNING: This will remove ALL deprecated collections!');
  } else {
    console.log(
      `📅 Removing collections deprecated more than ${days} days ago...`,
    );
  }

  try {
    const removed = await removeDeprecatedCollections(OUTPUT_DIR, days);

    if (removed.length > 0) {
      console.log(`\n✅ Removed ${removed.length} deprecated collection(s):`);
      removed.forEach((file) => console.log(`   - ${file}`));

      console.log('\n💡 Next steps:');
      console.log('   - Run `pnpm generate` to regenerate index files');
      console.log('   - Run `pnpm typecheck` to verify no breaking changes');
      console.log('   - Commit the changes');
    } else {
      console.log('\n✓ No deprecated collections found to remove');
      if (!removeAll) {
        console.log(
          `  (Collections are kept for ${days} days after deprecation)`,
        );
      }
    }
  } catch (error) {
    console.error(
      '\n❌ Failed to clean deprecated collections:',
      (error as Error).message,
    );
    process.exit(1);
  }
}

// Run cleanup
cleanDeprecated();
