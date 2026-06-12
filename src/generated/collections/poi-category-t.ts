/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: poi_category_t
 */

export interface Item_PoiCategoryT {
  description?: string | null;
  id?: number;
  language?: string | null;
  name: string;
  poi_category?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the poi_category_t collection
 */
export async function getManyPoiCategoryT(
  baseUrl: string,
  token: string,
  query?: Query<Item_PoiCategoryT>,
): Promise<Item_PoiCategoryT[]> {
  return getItems<Item_PoiCategoryT>(baseUrl, 'poi_category_t', token, query);
}

/**
 * Fetches a single item from the poi_category_t collection
 */
export async function getOnePoiCategoryT(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_PoiCategoryT>,
): Promise<Item_PoiCategoryT> {
  return getItem<Item_PoiCategoryT>(
    baseUrl,
    'poi_category_t',
    token,
    id,
    query,
  );
}
