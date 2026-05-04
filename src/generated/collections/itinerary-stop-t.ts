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
/**
 * @deprecated This collection no longer exists in Directus
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
/**
 * @deprecated This collection no longer exists in Directus
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
