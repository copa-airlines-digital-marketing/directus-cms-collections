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
/**
 * @deprecated This collection no longer exists in Directus
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
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getOnePoiImages(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_PoiImages>,
): Promise<Item_PoiImages> {
  return getItem<Item_PoiImages>(baseUrl, 'poi_images', token, id, query);
}
