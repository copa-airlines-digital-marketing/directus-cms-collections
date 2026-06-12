/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: neighborhood
 */

import type { GeoJSON } from '../../client/types.js';

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
export async function getOneNeighborhood(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_Neighborhood>,
): Promise<Item_Neighborhood> {
  return getItem<Item_Neighborhood>(baseUrl, 'neighborhood', token, id, query);
}
