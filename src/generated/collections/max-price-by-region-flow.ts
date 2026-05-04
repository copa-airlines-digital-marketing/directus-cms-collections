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
export interface Item_Maxpricebyregionflow {
  cm_region_flown?: unknown;
  date_created?: string | null;
  date_updated?: string | null;
  id?: number;
  maxPrice: number;
  name: string;
  user_created?: string | null;
  user_updated?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the maxPriceByRegionFlow collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getManyMaxpricebyregionflow(
  baseUrl: string,
  token: string,
  query?: Query<Item_Maxpricebyregionflow>,
): Promise<Item_Maxpricebyregionflow[]> {
  return getItems<Item_Maxpricebyregionflow>(
    baseUrl,
    'maxPriceByRegionFlow',
    token,
    query,
  );
}

/**
 * Fetches a single item from the maxPriceByRegionFlow collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getOneMaxpricebyregionflow(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_Maxpricebyregionflow>,
): Promise<Item_Maxpricebyregionflow> {
  return getItem<Item_Maxpricebyregionflow>(
    baseUrl,
    'maxPriceByRegionFlow',
    token,
    id,
    query,
  );
}
