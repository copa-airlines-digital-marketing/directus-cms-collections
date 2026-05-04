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
export interface Item_CmRegionFlown {
  date_created?: string | null;
  date_updated?: string | null;
  destinations?: unknown;
  id?: number;
  maxPrice?: number | null;
  name: string;
  user_created?: string | null;
  user_updated?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the cm_region_flown collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getManyCmRegionFlown(
  baseUrl: string,
  token: string,
  query?: Query<Item_CmRegionFlown>,
): Promise<Item_CmRegionFlown[]> {
  return getItems<Item_CmRegionFlown>(baseUrl, 'cm_region_flown', token, query);
}

/**
 * Fetches a single item from the cm_region_flown collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getOneCmRegionFlown(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_CmRegionFlown>,
): Promise<Item_CmRegionFlown> {
  return getItem<Item_CmRegionFlown>(
    baseUrl,
    'cm_region_flown',
    token,
    id,
    query,
  );
}
