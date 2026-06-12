/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: maxPriceByRegionFlow
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
