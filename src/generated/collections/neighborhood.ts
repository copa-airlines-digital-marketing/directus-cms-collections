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

import type { GeoJSON } from '../../client/types.js';

/**
 * @deprecated This collection no longer exists in Directus
 */
export interface Item_Neighborhood {
  city: string;
  date_created?: string | null;
  date_updated?: string | null;
  gallery?: unknown;
  hero_image?: string | null;
  id?: string;
  polygon_geojson?: GeoJSON | null;
  translations: unknown;
  user_created?: string | null;
  user_updated?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the neighborhood collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getManyNeighborhood(
  baseUrl: string,
  token: string,
  query?: Query<Item_Neighborhood>,
): Promise<Item_Neighborhood[]> {
  return getItems<Item_Neighborhood>(baseUrl, 'neighborhood', token, query);
}

/**
 * Fetches a single item from the neighborhood collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getOneNeighborhood(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_Neighborhood>,
): Promise<Item_Neighborhood> {
  return getItem<Item_Neighborhood>(baseUrl, 'neighborhood', token, id, query);
}
