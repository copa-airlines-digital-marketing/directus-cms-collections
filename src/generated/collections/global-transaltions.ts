/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: global_transaltions
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
