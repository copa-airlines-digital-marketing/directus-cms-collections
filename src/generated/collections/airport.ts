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
export interface Item_Airport {
  city: string;
  date_created?: string | null;
  date_updated?: string | null;
  elevation_mts?: number | null;
  iata: string;
  icao?: string | null;
  is_hub?: boolean;
  location: GeoJSON;
  status?: string;
  timezone: string;
  translations: unknown;
  user_created?: string | null;
  user_updated?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the airport collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getManyAirport(
  baseUrl: string,
  token: string,
  query?: Query<Item_Airport>,
): Promise<Item_Airport[]> {
  return getItems<Item_Airport>(baseUrl, 'airport', token, query);
}

/**
 * Fetches a single item from the airport collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getOneAirport(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_Airport>,
): Promise<Item_Airport> {
  return getItem<Item_Airport>(baseUrl, 'airport', token, id, query);
}
