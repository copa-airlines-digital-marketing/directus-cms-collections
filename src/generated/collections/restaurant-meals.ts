/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: restaurant_meals
 */

export interface Item_RestaurantMeals {
  date_created?: string | null;
  date_updated?: string | null;
  id?: string;
  translations: unknown;
  user_created?: string | null;
  user_updated?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the restaurant_meals collection
 */
export async function getManyRestaurantMeals(
  baseUrl: string,
  token: string,
  query?: Query<Item_RestaurantMeals>,
): Promise<Item_RestaurantMeals[]> {
  return getItems<Item_RestaurantMeals>(
    baseUrl,
    'restaurant_meals',
    token,
    query,
  );
}

/**
 * Fetches a single item from the restaurant_meals collection
 */
export async function getOneRestaurantMeals(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_RestaurantMeals>,
): Promise<Item_RestaurantMeals> {
  return getItem<Item_RestaurantMeals>(
    baseUrl,
    'restaurant_meals',
    token,
    id,
    query,
  );
}
