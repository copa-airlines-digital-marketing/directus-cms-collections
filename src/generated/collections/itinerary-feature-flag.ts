/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: itinerary_feature_flag
 */

export interface Item_ItineraryFeatureFlag {
  feature_flag?: string | null;
  id?: number;
  itinerary?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the itinerary_feature_flag collection
 */
export async function getManyItineraryFeatureFlag(
  baseUrl: string,
  token: string,
  query?: Query<Item_ItineraryFeatureFlag>,
): Promise<Item_ItineraryFeatureFlag[]> {
  return getItems<Item_ItineraryFeatureFlag>(
    baseUrl,
    'itinerary_feature_flag',
    token,
    query,
  );
}

/**
 * Fetches a single item from the itinerary_feature_flag collection
 */
export async function getOneItineraryFeatureFlag(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_ItineraryFeatureFlag>,
): Promise<Item_ItineraryFeatureFlag> {
  return getItem<Item_ItineraryFeatureFlag>(
    baseUrl,
    'itinerary_feature_flag',
    token,
    id,
    query,
  );
}
