/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: itinerary_stop_t
 */

export interface Item_ItineraryStopT {
  custom_body?: Record<string, unknown> | null;
  custom_title?: string | null;
  id?: number;
  itinerary_stop?: string | null;
  language?: string | null;
  notes?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the itinerary_stop_t collection
 */
export async function getManyItineraryStopT(
  baseUrl: string,
  token: string,
  query?: Query<Item_ItineraryStopT>,
): Promise<Item_ItineraryStopT[]> {
  return getItems<Item_ItineraryStopT>(
    baseUrl,
    'itinerary_stop_t',
    token,
    query,
  );
}

/**
 * Fetches a single item from the itinerary_stop_t collection
 */
export async function getOneItineraryStopT(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_ItineraryStopT>,
): Promise<Item_ItineraryStopT> {
  return getItem<Item_ItineraryStopT>(
    baseUrl,
    'itinerary_stop_t',
    token,
    id,
    query,
  );
}
