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
export interface Item_ItineraryDay {
  date_created?: string | null;
  date_updated?: string | null;
  day_number: number;
  id?: string;
  itinerary: string;
  itinerary_stop?: unknown;
  user_created?: string | null;
  user_updated?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the itinerary_day collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getManyItineraryDay(
  baseUrl: string,
  token: string,
  query?: Query<Item_ItineraryDay>,
): Promise<Item_ItineraryDay[]> {
  return getItems<Item_ItineraryDay>(baseUrl, 'itinerary_day', token, query);
}

/**
 * Fetches a single item from the itinerary_day collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getOneItineraryDay(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_ItineraryDay>,
): Promise<Item_ItineraryDay> {
  return getItem<Item_ItineraryDay>(baseUrl, 'itinerary_day', token, id, query);
}
