/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: destinations
 */

import type { GeoJSON } from '../../client/types.js';

export interface Item_Destinations {
  categories: unknown;
  codeshare?: boolean | null;
  copa_region: number;
  country: string;
  date_created?: string | null;
  date_updated?: string | null;
  flight_duration_from_panama?: number | null;
  gallery?: unknown;
  hub_floor?: number | null;
  iata_code?: string;
  launch_date?: string | null;
  location?: GeoJSON | null;
  main_image?: string | null;
  maketing_category?: string | null;
  operation_starts?: string | null;
  region: number;
  region_flow_max?: number | null;
  regionFlown?: number | null;
  sort?: number | null;
  status?: string | null;
  time_zone_offset?: string | null;
  translations: unknown;
  user_created?: string | null;
  user_updated?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the destinations collection
 */
export async function getManyDestinations(
  baseUrl: string,
  token: string,
  query?: Query<Item_Destinations>,
): Promise<Item_Destinations[]> {
  return getItems<Item_Destinations>(baseUrl, 'destinations', token, query);
}

/**
 * Fetches a single item from the destinations collection
 */
export async function getOneDestinations(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_Destinations>,
): Promise<Item_Destinations> {
  return getItem<Item_Destinations>(baseUrl, 'destinations', token, id, query);
}
