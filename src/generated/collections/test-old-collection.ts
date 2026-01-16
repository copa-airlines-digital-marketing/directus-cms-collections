/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 *
 * ⚠️ DEPRECATED COLLECTION ⚠️
 * This collection no longer exists in Directus.
 * Deprecated on: 2026-01-16
 *
 * This file is kept for backward compatibility.
 * Please migrate away from this collection before it's removed.
 * To manually remove deprecated collections, run: pnpm clean:deprecated
 */

/**
 * @deprecated This collection no longer exists in Directus
 */
export interface Item_TestOldCollection {
  id?: string;
  name: string;
  description?: string | null;
  status?: string;
  date_created?: string | null;
  date_updated?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the test_old_collection collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getManyTestOldCollection(
  baseUrl: string,
  token: string,
  query?: Query<Item_TestOldCollection>,
): Promise<Item_TestOldCollection[]> {
  return getItems<Item_TestOldCollection>(
    baseUrl,
    'test_old_collection',
    token,
    query,
  );
}

/**
 * Fetches a single item from the test_old_collection collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getOneTestOldCollection(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_TestOldCollection>,
): Promise<Item_TestOldCollection> {
  return getItem<Item_TestOldCollection>(
    baseUrl,
    'test_old_collection',
    token,
    id,
    query,
  );
}
