/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: restaurant_cuisines
 */

export interface Item_RestaurantCuisines {
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
 * Fetches multiple items from the restaurant_cuisines collection
 */
export async function getManyRestaurantCuisines(
  baseUrl: string,
  token: string,
  query?: Query<Item_RestaurantCuisines>,
): Promise<Item_RestaurantCuisines[]> {
  return getItems<Item_RestaurantCuisines>(
    baseUrl,
    'restaurant_cuisines',
    token,
    query,
  );
}

/**
 * Fetches a single item from the restaurant_cuisines collection
 */
export async function getOneRestaurantCuisines(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_RestaurantCuisines>,
): Promise<Item_RestaurantCuisines> {
  return getItem<Item_RestaurantCuisines>(
    baseUrl,
    'restaurant_cuisines',
    token,
    id,
    query,
  );
}
