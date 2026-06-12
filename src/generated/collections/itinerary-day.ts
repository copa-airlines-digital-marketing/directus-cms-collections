/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: itinerary_day
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
export async function getOneItineraryDay(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_ItineraryDay>,
): Promise<Item_ItineraryDay> {
  return getItem<Item_ItineraryDay>(baseUrl, 'itinerary_day', token, id, query);
}
