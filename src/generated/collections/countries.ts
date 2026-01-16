/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: countries
 */

export interface Item_Countries {
  code?: string;
  currency_code?: string | null;
  date_created?: string | null;
  date_updated?: string | null;
  destinations?: unknown;
  flag?: number | null;
  phone_code?: number | null;
  translations: unknown;
  user_created?: string | null;
  user_updated?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the countries collection
 */
export async function getManyCountries(
  baseUrl: string,
  token: string,
  query?: Query<Item_Countries>,
): Promise<Item_Countries[]> {
  return getItems<Item_Countries>(baseUrl, 'countries', token, query);
}

/**
 * Fetches a single item from the countries collection
 */
export async function getOneCountries(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_Countries>,
): Promise<Item_Countries> {
  return getItem<Item_Countries>(baseUrl, 'countries', token, id, query);
}
