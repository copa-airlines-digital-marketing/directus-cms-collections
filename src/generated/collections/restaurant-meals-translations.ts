/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: restaurant_meals_translations
 */

export interface Item_RestaurantMealsTranslations {
  id?: number;
  languages_code?: string | null;
  name: string;
  restaurant_meals_id?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the restaurant_meals_translations collection
 */
export async function getManyRestaurantMealsTranslations(
  baseUrl: string,
  token: string,
  query?: Query<Item_RestaurantMealsTranslations>,
): Promise<Item_RestaurantMealsTranslations[]> {
  return getItems<Item_RestaurantMealsTranslations>(
    baseUrl,
    'restaurant_meals_translations',
    token,
    query,
  );
}

/**
 * Fetches a single item from the restaurant_meals_translations collection
 */
export async function getOneRestaurantMealsTranslations(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_RestaurantMealsTranslations>,
): Promise<Item_RestaurantMealsTranslations> {
  return getItem<Item_RestaurantMealsTranslations>(
    baseUrl,
    'restaurant_meals_translations',
    token,
    id,
    query,
  );
}
