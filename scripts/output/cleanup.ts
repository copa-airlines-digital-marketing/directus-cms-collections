import { readdir, readFile, writeFile, unlink } from 'node:fs/promises';
import { join } from 'node:path';

/**
 * Metadata about deprecated collections
 */
export interface DeprecatedCollection {
  fileName: string;
  collectionName: string;
  deprecatedAt: string;
  reason: string;
}

/**
 * Checks if a file is already marked as deprecated
 */
async function isDeprecated(filePath: string): Promise<boolean> {
  try {
    const content = await readFile(filePath, 'utf-8');
    return (
      content.includes('@deprecated') ||
      content.includes('DEPRECATED COLLECTION')
    );
  } catch {
    return false;
  }
}

/**
 * Marks collection files as deprecated instead of deleting them
 */
export async function deprecateStaleCollections(
  generatedDir: string,
  currentCollections: Set<string>,
): Promise<DeprecatedCollection[]> {
  const collectionsDir = join(generatedDir, 'collections');
  const deprecated: DeprecatedCollection[] = [];

  try {
    const files = await readdir(collectionsDir);

    for (const file of files) {
      if (!file.endsWith('.ts')) {
        continue;
      }

      const collectionFileName = file.replace(/\.ts$/, '');

      // If this file doesn't correspond to a current collection
      if (!currentCollections.has(collectionFileName)) {
        const filePath = join(collectionsDir, file);

        // Check if already deprecated
        if (await isDeprecated(filePath)) {
          continue; // Already deprecated, skip
        }

        // Read the current content
        const content = await readFile(filePath, 'utf-8');

        // Extract collection name from content
        const collectionNameMatch = content.match(
          /Generated from Directus collection: (\w+)/,
        );
        const collectionName = collectionNameMatch
          ? collectionNameMatch[1]
          : collectionFileName;

        // Add deprecation notice at the top
        const deprecatedContent = content.replace(
          /\/\*\*\s*\n \* AUTO-GENERATED FILE - DO NOT EDIT MANUALLY\s*\n \* Generated from Directus collection: .*\s*\n \*\//,
          `/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * 
 * ⚠️ DEPRECATED COLLECTION ⚠️
 * This collection no longer exists in Directus.
 * Deprecated on: ${new Date().toISOString().split('T')[0]}
 * 
 * This file is kept for backward compatibility.
 * Please migrate away from this collection before it's removed.
 * To manually remove deprecated collections, run: pnpm clean:deprecated
 */`,
        );

        // Mark types and functions as deprecated
        const fullyDeprecated = deprecatedContent
          .replace(
            /export interface (Item_\w+) \{/g,
            '/**\n * @deprecated This collection no longer exists in Directus\n */\nexport interface $1 {',
          )
          .replace(
            /export async function (getMany\w+|getOne\w+)/g,
            '/**\n * @deprecated This collection no longer exists in Directus\n */\nexport async function $1',
          );

        // Write back the deprecated version
        await writeFile(filePath, fullyDeprecated, 'utf-8');

        deprecated.push({
          fileName: file,
          collectionName,
          deprecatedAt: new Date().toISOString(),
          reason: 'Collection no longer exists in Directus',
        });
      }
    }
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code !== 'ENOENT') {
      throw error;
    }
  }

  return deprecated;
}

/**
 * Removes deprecated collection files (manual cleanup)
 * This should only be called explicitly, not automatically
 */
export async function removeDeprecatedCollections(
  generatedDir: string,
  olderThanDays: number = 30,
): Promise<string[]> {
  const collectionsDir = join(generatedDir, 'collections');
  const removed: string[] = [];
  const cutoffDate = new Date();
  cutoffDate.setDate(cutoffDate.getDate() - olderThanDays);

  try {
    const files = await readdir(collectionsDir);

    for (const file of files) {
      if (!file.endsWith('.ts')) {
        continue;
      }

      const filePath = join(collectionsDir, file);
      const content = await readFile(filePath, 'utf-8');

      // Check if deprecated
      if (content.includes('DEPRECATED COLLECTION')) {
        // Extract deprecation date
        const dateMatch = content.match(/Deprecated on: (\d{4}-\d{2}-\d{2})/);
        if (dateMatch) {
          const deprecatedDate = new Date(dateMatch[1]);

          // Only remove if older than cutoff
          if (deprecatedDate < cutoffDate) {
            await unlink(filePath);
            removed.push(file);
          }
        }
      }
    }
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code !== 'ENOENT') {
      throw error;
    }
  }

  return removed;
}
