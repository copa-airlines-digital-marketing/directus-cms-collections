/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: country_t
 */

export interface Item_CountryT {
  country?: string | null;
  id?: number;
  language?: string | null;
  name: string;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the country_t collection
 */
export async function getManyCountryT(
  baseUrl: string,
  token: string,
  query?: Query<Item_CountryT>,
): Promise<Item_CountryT[]> {
  return getItems<Item_CountryT>(baseUrl, 'country_t', token, query);
}

/**
 * Fetches a single item from the country_t collection
 */
export async function getOneCountryT(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_CountryT>,
): Promise<Item_CountryT> {
  return getItem<Item_CountryT>(baseUrl, 'country_t', token, id, query);
}
