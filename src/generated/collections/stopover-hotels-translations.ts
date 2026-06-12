/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: stopover_hotels_translations
 */

export interface Item_StopoverHotelsTranslations {
  description?: string | null;
  id?: number;
  lang_code?: string | null;
  name: string;
  path?: string | null;
  preview_lang?: unknown;
  promo_description?: string | null;
  promo_name?: string | null;
  stopover_hotels_id?: number | null;
  url?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the stopover_hotels_translations collection
 */
export async function getManyStopoverHotelsTranslations(
  baseUrl: string,
  token: string,
  query?: Query<Item_StopoverHotelsTranslations>,
): Promise<Item_StopoverHotelsTranslations[]> {
  return getItems<Item_StopoverHotelsTranslations>(
    baseUrl,
    'stopover_hotels_translations',
    token,
    query,
  );
}

/**
 * Fetches a single item from the stopover_hotels_translations collection
 */
export async function getOneStopoverHotelsTranslations(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_StopoverHotelsTranslations>,
): Promise<Item_StopoverHotelsTranslations> {
  return getItem<Item_StopoverHotelsTranslations>(
    baseUrl,
    'stopover_hotels_translations',
    token,
    id,
    query,
  );
}
