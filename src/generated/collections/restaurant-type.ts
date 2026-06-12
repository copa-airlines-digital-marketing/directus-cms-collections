/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: restaurant_type
 */

export interface Item_RestaurantType {
  date_created?: string | null;
  date_updated?: string | null;
  id?: string;
  translations?: unknown;
  user_created?: string | null;
  user_updated?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the restaurant_type collection
 */
export async function getManyRestaurantType(
  baseUrl: string,
  token: string,
  query?: Query<Item_RestaurantType>,
): Promise<Item_RestaurantType[]> {
  return getItems<Item_RestaurantType>(
    baseUrl,
    'restaurant_type',
    token,
    query,
  );
}

/**
 * Fetches a single item from the restaurant_type collection
 */
export async function getOneRestaurantType(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_RestaurantType>,
): Promise<Item_RestaurantType> {
  return getItem<Item_RestaurantType>(
    baseUrl,
    'restaurant_type',
    token,
    id,
    query,
  );
}
