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
export interface Item_Subregions {
  code_m49?: string;
  date_created?: string | null;
  date_updated?: string | null;
  is_active?: boolean | null;
  order?: number | null;
  region: string;
  slug: string;
  translations: unknown;
  user_created?: string | null;
  user_updated?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the subregions collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getManySubregions(
  baseUrl: string,
  token: string,
  query?: Query<Item_Subregions>,
): Promise<Item_Subregions[]> {
  return getItems<Item_Subregions>(baseUrl, 'subregions', token, query);
}

/**
 * Fetches a single item from the subregions collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getOneSubregions(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_Subregions>,
): Promise<Item_Subregions> {
  return getItem<Item_Subregions>(baseUrl, 'subregions', token, id, query);
}
