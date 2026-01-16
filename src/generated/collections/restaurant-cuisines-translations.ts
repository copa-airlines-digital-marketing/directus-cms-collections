/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: restaurant_cuisines_translations
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
