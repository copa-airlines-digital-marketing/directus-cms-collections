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
/**
 * @deprecated This collection no longer exists in Directus
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
/**
 * @deprecated This collection no longer exists in Directus
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
