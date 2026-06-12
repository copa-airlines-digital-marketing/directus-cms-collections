/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: city
 */

import type { GeoJSON } from '../../client/types.js';

export interface Item_City {
  country: string;
  date_created?: string | null;
  date_updated?: string | null;
  iata_city_code: string;
  location: GeoJSON;
  timezone: string;
  translations: unknown;
  user_created?: string | null;
  user_updated?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the city collection
 */
export async function getManyCity(
  baseUrl: string,
  token: string,
  query?: Query<Item_City>,
): Promise<Item_City[]> {
  return getItems<Item_City>(baseUrl, 'city', token, query);
}

/**
 * Fetches a single item from the city collection
 */
export async function getOneCity(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_City>,
): Promise<Item_City> {
  return getItem<Item_City>(baseUrl, 'city', token, id, query);
}
