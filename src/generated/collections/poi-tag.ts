/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: poi_tag
 */

export interface Item_PoiTag {
  id?: number;
  poi?: string | null;
  tag?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the poi_tag collection
 */
export async function getManyPoiTag(
  baseUrl: string,
  token: string,
  query?: Query<Item_PoiTag>,
): Promise<Item_PoiTag[]> {
  return getItems<Item_PoiTag>(baseUrl, 'poi_tag', token, query);
}

/**
 * Fetches a single item from the poi_tag collection
 */
export async function getOnePoiTag(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_PoiTag>,
): Promise<Item_PoiTag> {
  return getItem<Item_PoiTag>(baseUrl, 'poi_tag', token, id, query);
}
