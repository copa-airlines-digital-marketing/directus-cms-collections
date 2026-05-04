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
export interface Item_Country {
  continent: string;
  currency: string;
  date_created?: string | null;
  date_updated?: string | null;
  iso2: string;
  iso3: string;
  timezone_primary: string;
  translations: unknown;
  user_created?: string | null;
  user_updated?: string | null;
  visa_info_url?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the country collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getManyCountry(
  baseUrl: string,
  token: string,
  query?: Query<Item_Country>,
): Promise<Item_Country[]> {
  return getItems<Item_Country>(baseUrl, 'country', token, query);
}

/**
 * Fetches a single item from the country collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getOneCountry(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_Country>,
): Promise<Item_Country> {
  return getItem<Item_Country>(baseUrl, 'country', token, id, query);
}
