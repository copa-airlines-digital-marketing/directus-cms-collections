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
export interface Item_ItineraryStop {
  date_created?: string | null;
  date_updated?: string | null;
  day?: string;
  end_time?: string | null;
  id?: string;
  poi?: string | null;
  sort: number;
  start_time?: string | null;
  translations?: unknown;
  user_created?: string | null;
  user_updated?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the itinerary_stop collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getManyItineraryStop(
  baseUrl: string,
  token: string,
  query?: Query<Item_ItineraryStop>,
): Promise<Item_ItineraryStop[]> {
  return getItems<Item_ItineraryStop>(baseUrl, 'itinerary_stop', token, query);
}

/**
 * Fetches a single item from the itinerary_stop collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getOneItineraryStop(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_ItineraryStop>,
): Promise<Item_ItineraryStop> {
  return getItem<Item_ItineraryStop>(
    baseUrl,
    'itinerary_stop',
    token,
    id,
    query,
  );
}
