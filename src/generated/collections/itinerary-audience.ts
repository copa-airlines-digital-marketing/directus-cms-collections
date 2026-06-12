/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: itinerary_audience
 */

export interface Item_ItineraryAudience {
  audience?: string | null;
  id?: number;
  itinerary?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the itinerary_audience collection
 */
export async function getManyItineraryAudience(
  baseUrl: string,
  token: string,
  query?: Query<Item_ItineraryAudience>,
): Promise<Item_ItineraryAudience[]> {
  return getItems<Item_ItineraryAudience>(
    baseUrl,
    'itinerary_audience',
    token,
    query,
  );
}

/**
 * Fetches a single item from the itinerary_audience collection
 */
export async function getOneItineraryAudience(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_ItineraryAudience>,
): Promise<Item_ItineraryAudience> {
  return getItem<Item_ItineraryAudience>(
    baseUrl,
    'itinerary_audience',
    token,
    id,
    query,
  );
}
