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
export interface Item_RestaurantCuisinesTranslations {
  id?: number;
  languages_code?: string | null;
  name: string;
  restaurant_cuisines_id?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the restaurant_cuisines_translations collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getManyRestaurantCuisinesTranslations(
  baseUrl: string,
  token: string,
  query?: Query<Item_RestaurantCuisinesTranslations>,
): Promise<Item_RestaurantCuisinesTranslations[]> {
  return getItems<Item_RestaurantCuisinesTranslations>(
    baseUrl,
    'restaurant_cuisines_translations',
    token,
    query,
  );
}

/**
 * Fetches a single item from the restaurant_cuisines_translations collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getOneRestaurantCuisinesTranslations(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_RestaurantCuisinesTranslations>,
): Promise<Item_RestaurantCuisinesTranslations> {
  return getItem<Item_RestaurantCuisinesTranslations>(
    baseUrl,
    'restaurant_cuisines_translations',
    token,
    id,
    query,
  );
}
