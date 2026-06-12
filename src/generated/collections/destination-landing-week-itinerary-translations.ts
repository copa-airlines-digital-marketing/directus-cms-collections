/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: destination_landing_week_itinerary_translations
 */

export interface Item_DestinationLandingWeekItineraryTranslations {
  description?: string | null;
  destination_landing_week_itinerary_id?: number | null;
  id?: number;
  image_alt?: string | null;
  kicker?: string | null;
  languages_code?: string | null;
  title?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the destination_landing_week_itinerary_translations collection
 */
export async function getManyDestinationLandingWeekItineraryTranslations(
  baseUrl: string,
  token: string,
  query?: Query<Item_DestinationLandingWeekItineraryTranslations>,
): Promise<Item_DestinationLandingWeekItineraryTranslations[]> {
  return getItems<Item_DestinationLandingWeekItineraryTranslations>(
    baseUrl,
    'destination_landing_week_itinerary_translations',
    token,
    query,
  );
}

/**
 * Fetches a single item from the destination_landing_week_itinerary_translations collection
 */
export async function getOneDestinationLandingWeekItineraryTranslations(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_DestinationLandingWeekItineraryTranslations>,
): Promise<Item_DestinationLandingWeekItineraryTranslations> {
  return getItem<Item_DestinationLandingWeekItineraryTranslations>(
    baseUrl,
    'destination_landing_week_itinerary_translations',
    token,
    id,
    query,
  );
}
