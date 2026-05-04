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
export interface Item_CityT {
  city?: string | null;
  description?: string | null;
  id?: number;
  language?: string | null;
  name: string;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the city_t collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getManyCityT(
  baseUrl: string,
  token: string,
  query?: Query<Item_CityT>,
): Promise<Item_CityT[]> {
  return getItems<Item_CityT>(baseUrl, 'city_t', token, query);
}

/**
 * Fetches a single item from the city_t collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getOneCityT(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_CityT>,
): Promise<Item_CityT> {
  return getItem<Item_CityT>(baseUrl, 'city_t', token, id, query);
}
