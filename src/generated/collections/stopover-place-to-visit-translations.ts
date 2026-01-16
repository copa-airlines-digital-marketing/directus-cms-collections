/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: stopover_place_to_visit_translations
 */

export interface Item_StopoverPlaceToVisitTranslations {
  description?: string | null;
  id?: number;
  lang_code?: string | null;
  name: string;
  path?: string | null;
  promo_description?: string | null;
  promo_name?: string | null;
  stopover_place_to_visit_id?: number | null;
  url?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the stopover_place_to_visit_translations collection
 */
export async function getManyStopoverPlaceToVisitTranslations(
  baseUrl: string,
  token: string,
  query?: Query<Item_StopoverPlaceToVisitTranslations>,
): Promise<Item_StopoverPlaceToVisitTranslations[]> {
  return getItems<Item_StopoverPlaceToVisitTranslations>(
    baseUrl,
    'stopover_place_to_visit_translations',
    token,
    query,
  );
}

/**
 * Fetches a single item from the stopover_place_to_visit_translations collection
 */
export async function getOneStopoverPlaceToVisitTranslations(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_StopoverPlaceToVisitTranslations>,
): Promise<Item_StopoverPlaceToVisitTranslations> {
  return getItem<Item_StopoverPlaceToVisitTranslations>(
    baseUrl,
    'stopover_place_to_visit_translations',
    token,
    id,
    query,
  );
}
