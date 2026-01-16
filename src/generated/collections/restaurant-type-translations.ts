/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: restaurant_type_translations
 */

export interface Item_RestaurantTypeTranslations {
  id?: number;
  languages_code?: string | null;
  name: string;
  restaurant_type_id?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the restaurant_type_translations collection
 */
export async function getManyRestaurantTypeTranslations(
  baseUrl: string,
  token: string,
  query?: Query<Item_RestaurantTypeTranslations>,
): Promise<Item_RestaurantTypeTranslations[]> {
  return getItems<Item_RestaurantTypeTranslations>(
    baseUrl,
    'restaurant_type_translations',
    token,
    query,
  );
}

/**
 * Fetches a single item from the restaurant_type_translations collection
 */
export async function getOneRestaurantTypeTranslations(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_RestaurantTypeTranslations>,
): Promise<Item_RestaurantTypeTranslations> {
  return getItem<Item_RestaurantTypeTranslations>(
    baseUrl,
    'restaurant_type_translations',
    token,
    id,
    query,
  );
}
