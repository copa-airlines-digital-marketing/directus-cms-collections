import { describe, it, expect } from 'vitest';
import { getItems } from '../src/runtime/getItems.js';
import { getItem } from '../src/runtime/getItem.js';
import { SCHEMA_METADATA } from '../src/generated/schema.js';
import { getTestConfig, pickRandom } from './testUtils.js';

describe('Smoke Tests', () => {
  it('should have generated schema metadata', () => {
    expect(SCHEMA_METADATA).toBeDefined();
    expect(Array.isArray(SCHEMA_METADATA)).toBe(true);
  });

  it('should fetch items from a random collection', async () => {
    // Skip if no collections generated
    if (SCHEMA_METADATA.length === 0) {
      console.log(
        '⚠️  No collections found in schema metadata, skipping smoke test',
      );
      return;
    }

    const { baseUrl, token } = getTestConfig();
    const collection = pickRandom(SCHEMA_METADATA);

    if (!collection) {
      console.log(
        '⚠️  Could not pick a random collection, skipping smoke test',
      );
      return;
    }

    console.log(`\n🧪 Testing collection: ${collection.name}`);

    // Test getItems
    const items = await getItems(baseUrl, collection.name, token, { limit: 1 });

    expect(Array.isArray(items)).toBe(true);
    console.log(`   ✓ getItems returned array with ${items.length} item(s)`);

    // Test getItem if we have at least one item
    if (items.length > 0) {
      const firstItem = items[0] as Record<string, unknown>;
      const primaryKeyValue = firstItem[collection.primaryKey];

      if (primaryKeyValue !== undefined && primaryKeyValue !== null) {
        const item = await getItem(
          baseUrl,
          collection.name,
          token,
          primaryKeyValue as string | number,
        );

        expect(item).toBeDefined();
        expect(typeof item).toBe('object');
        console.log(
          `   ✓ getItem returned single item with id: ${primaryKeyValue}`,
        );
      } else {
        console.log(
          `   ⚠️  First item has no primary key value, skipping getItem test`,
        );
      }
    } else {
      console.log(`   ⚠️  Collection is empty, skipping getItem test`);
    }
  });

  it('should handle query parameters correctly', async () => {
    if (SCHEMA_METADATA.length === 0) {
      console.log('⚠️  No collections found, skipping query test');
      return;
    }

    const { baseUrl, token } = getTestConfig();
    const collection = pickRandom(SCHEMA_METADATA);

    if (!collection) {
      return;
    }

    // Test with fields parameter
    const items = await getItems(baseUrl, collection.name, token, {
      limit: 1,
      fields: [collection.primaryKey],
    });

    expect(Array.isArray(items)).toBe(true);

    if (items.length > 0) {
      const item = items[0] as Record<string, unknown>;
      expect(item[collection.primaryKey]).toBeDefined();
      console.log(`   ✓ Query with fields parameter works correctly`);
    }
  });
});
