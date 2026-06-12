/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: stopover_transportation_translations
 */

export interface Item_StopoverTransportationTranslations {
  id?: number;
  languages_code?: string | null;
  name: string;
  path?: string | null;
  promo_description?: string | null;
  promo_name?: string | null;
  stopover_transportation_id?: number | null;
  url?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the stopover_transportation_translations collection
 */
export async function getManyStopoverTransportationTranslations(
  baseUrl: string,
  token: string,
  query?: Query<Item_StopoverTransportationTranslations>,
): Promise<Item_StopoverTransportationTranslations[]> {
  return getItems<Item_StopoverTransportationTranslations>(
    baseUrl,
    'stopover_transportation_translations',
    token,
    query,
  );
}

/**
 * Fetches a single item from the stopover_transportation_translations collection
 */
export async function getOneStopoverTransportationTranslations(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_StopoverTransportationTranslations>,
): Promise<Item_StopoverTransportationTranslations> {
  return getItem<Item_StopoverTransportationTranslations>(
    baseUrl,
    'stopover_transportation_translations',
    token,
    id,
    query,
  );
}
