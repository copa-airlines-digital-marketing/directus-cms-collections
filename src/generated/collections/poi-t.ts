/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: poi_t
 */

export interface Item_PoiT {
  address?: string | null;
  id?: number;
  language?: string | null;
  localized_slug: string;
  long_description?: Record<string, unknown> | null;
  name: string;
  poi?: string | null;
  short_description?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the poi_t collection
 */
export async function getManyPoiT(
  baseUrl: string,
  token: string,
  query?: Query<Item_PoiT>,
): Promise<Item_PoiT[]> {
  return getItems<Item_PoiT>(baseUrl, 'poi_t', token, query);
}

/**
 * Fetches a single item from the poi_t collection
 */
export async function getOnePoiT(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_PoiT>,
): Promise<Item_PoiT> {
  return getItem<Item_PoiT>(baseUrl, 'poi_t', token, id, query);
}
