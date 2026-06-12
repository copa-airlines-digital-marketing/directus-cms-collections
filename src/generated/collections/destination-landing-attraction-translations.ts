/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: destination_landing_attraction_translations
 */

export interface Item_DestinationLandingAttractionTranslations {
  description?: string | null;
  destination_landing_attractions_id?: number | null;
  id?: number;
  image_alt?: string | null;
  languages_code?: string | null;
  link_label?: string | null;
  title?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the destination_landing_attraction_translations collection
 */
export async function getManyDestinationLandingAttractionTranslations(
  baseUrl: string,
  token: string,
  query?: Query<Item_DestinationLandingAttractionTranslations>,
): Promise<Item_DestinationLandingAttractionTranslations[]> {
  return getItems<Item_DestinationLandingAttractionTranslations>(
    baseUrl,
    'destination_landing_attraction_translations',
    token,
    query,
  );
}

/**
 * Fetches a single item from the destination_landing_attraction_translations collection
 */
export async function getOneDestinationLandingAttractionTranslations(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_DestinationLandingAttractionTranslations>,
): Promise<Item_DestinationLandingAttractionTranslations> {
  return getItem<Item_DestinationLandingAttractionTranslations>(
    baseUrl,
    'destination_landing_attraction_translations',
    token,
    id,
    query,
  );
}
