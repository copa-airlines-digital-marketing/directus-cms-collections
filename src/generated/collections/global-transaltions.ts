/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * 
 * ⚠️ DEPRECATED COLLECTION ⚠️
 * This collection no longer exists in Directus.
 * Deprecated on: 2026-04-14
 * 
 * This file is kept for backward compatibility.
 * Please migrate away from this collection before it's removed.
 * To manually remove deprecated collections, run: pnpm clean:deprecated
 */

/**
 * @deprecated This collection no longer exists in Directus
 */
export interface Item_GlobalTransaltions {
  date_created?: string | null;
  date_updated?: string | null;
  key?: string;
  needs_review: number;
  translations: unknown;
  user_created?: string | null;
  user_updated?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the global_transaltions collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getManyGlobalTransaltions(
  baseUrl: string,
  token: string,
  query?: Query<Item_GlobalTransaltions>,
): Promise<Item_GlobalTransaltions[]> {
  return getItems<Item_GlobalTransaltions>(
    baseUrl,
    'global_transaltions',
    token,
    query,
  );
}

/**
 * Fetches a single item from the global_transaltions collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getOneGlobalTransaltions(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_GlobalTransaltions>,
): Promise<Item_GlobalTransaltions> {
  return getItem<Item_GlobalTransaltions>(
    baseUrl,
    'global_transaltions',
    token,
    id,
    query,
  );
}
