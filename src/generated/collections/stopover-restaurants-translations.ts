/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * 
 * ⚠️ DEPRECATED COLLECTION ⚠️
 * This collection no longer exists in Directus.
 * Deprecated on: 2026-04-14
 * 
 * This file is kept for backward compatibility.
 * Please migrate away from this collection before it's removed.
 * To manually remove deprecated collections, run: pnpm clean:deprecated
 */

/**
 * @deprecated This collection no longer exists in Directus
 */
export interface Item_StopoverRestaurantsTranslations {
  description?: string | null;
  id?: number;
  lang_code?: string | null;
  name: string;
  path?: string | null;
  preview_link?: unknown;
  promo_description?: string | null;
  promo_name?: string | null;
  stopover_restaurants_id?: number | null;
  url?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the stopover_restaurants_translations collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getManyStopoverRestaurantsTranslations(
  baseUrl: string,
  token: string,
  query?: Query<Item_StopoverRestaurantsTranslations>,
): Promise<Item_StopoverRestaurantsTranslations[]> {
  return getItems<Item_StopoverRestaurantsTranslations>(
    baseUrl,
    'stopover_restaurants_translations',
    token,
    query,
  );
}

/**
 * Fetches a single item from the stopover_restaurants_translations collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getOneStopoverRestaurantsTranslations(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_StopoverRestaurantsTranslations>,
): Promise<Item_StopoverRestaurantsTranslations> {
  return getItem<Item_StopoverRestaurantsTranslations>(
    baseUrl,
    'stopover_restaurants_translations',
    token,
    id,
    query,
  );
}
