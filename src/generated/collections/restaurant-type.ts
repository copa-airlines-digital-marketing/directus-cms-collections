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
/**
 * @deprecated This collection no longer exists in Directus
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
/**
 * @deprecated This collection no longer exists in Directus
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
