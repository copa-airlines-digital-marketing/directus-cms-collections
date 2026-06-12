/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: destination_landing_week_itinerary
 */

export interface Item_DestinationLandingWeekItinerary {
  id?: number;
  image?: string | null;
  image_getty_id?: string | null;
  name: string;
  sort?: number | null;
  status: string;
  translations?: unknown;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the destination_landing_week_itinerary collection
 */
export async function getManyDestinationLandingWeekItinerary(
  baseUrl: string,
  token: string,
  query?: Query<Item_DestinationLandingWeekItinerary>,
): Promise<Item_DestinationLandingWeekItinerary[]> {
  return getItems<Item_DestinationLandingWeekItinerary>(
    baseUrl,
    'destination_landing_week_itinerary',
    token,
    query,
  );
}

/**
 * Fetches a single item from the destination_landing_week_itinerary collection
 */
export async function getOneDestinationLandingWeekItinerary(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_DestinationLandingWeekItinerary>,
): Promise<Item_DestinationLandingWeekItinerary> {
  return getItem<Item_DestinationLandingWeekItinerary>(
    baseUrl,
    'destination_landing_week_itinerary',
    token,
    id,
    query,
  );
}
