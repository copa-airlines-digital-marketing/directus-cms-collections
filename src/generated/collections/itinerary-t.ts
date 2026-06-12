/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: itinerary_t
 */

export interface Item_ItineraryT {
  id?: number;
  itinerary?: string | null;
  language?: string | null;
  localized_slug: string;
  seo_description?: string | null;
  seo_title?: string | null;
  summary?: string | null;
  title: string;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the itinerary_t collection
 */
export async function getManyItineraryT(
  baseUrl: string,
  token: string,
  query?: Query<Item_ItineraryT>,
): Promise<Item_ItineraryT[]> {
  return getItems<Item_ItineraryT>(baseUrl, 'itinerary_t', token, query);
}

/**
 * Fetches a single item from the itinerary_t collection
 */
export async function getOneItineraryT(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_ItineraryT>,
): Promise<Item_ItineraryT> {
  return getItem<Item_ItineraryT>(baseUrl, 'itinerary_t', token, id, query);
}
