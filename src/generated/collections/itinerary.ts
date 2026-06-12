/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: itinerary
 */

export interface Item_Itinerary {
  audiences?: unknown;
  cover_image?: string | null;
  date_created?: string | null;
  date_updated?: string | null;
  duration_days: number;
  feature_flags_required?: unknown;
  id?: string;
  itinerary_day?: unknown;
  status?: string;
  theme: string;
  translations: unknown;
  user_created?: string | null;
  user_updated?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the itinerary collection
 */
export async function getManyItinerary(
  baseUrl: string,
  token: string,
  query?: Query<Item_Itinerary>,
): Promise<Item_Itinerary[]> {
  return getItems<Item_Itinerary>(baseUrl, 'itinerary', token, query);
}

/**
 * Fetches a single item from the itinerary collection
 */
export async function getOneItinerary(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_Itinerary>,
): Promise<Item_Itinerary> {
  return getItem<Item_Itinerary>(baseUrl, 'itinerary', token, id, query);
}
