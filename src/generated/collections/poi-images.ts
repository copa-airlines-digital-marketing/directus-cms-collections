/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: poi_images
 */

export interface Item_PoiImages {
  id?: number;
  image?: string | null;
  poi?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the poi_images collection
 */
export async function getManyPoiImages(
  baseUrl: string,
  token: string,
  query?: Query<Item_PoiImages>,
): Promise<Item_PoiImages[]> {
  return getItems<Item_PoiImages>(baseUrl, 'poi_images', token, query);
}

/**
 * Fetches a single item from the poi_images collection
 */
export async function getOnePoiImages(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_PoiImages>,
): Promise<Item_PoiImages> {
  return getItem<Item_PoiImages>(baseUrl, 'poi_images', token, id, query);
}
