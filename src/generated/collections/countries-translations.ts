/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: countries_translations
 */

export interface Item_CountriesTranslations {
  airtrfx_uri?: string | null;
  countries_code?: string | null;
  id?: number;
  languages_code?: string | null;
  name?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the countries_translations collection
 */
export async function getManyCountriesTranslations(
  baseUrl: string,
  token: string,
  query?: Query<Item_CountriesTranslations>,
): Promise<Item_CountriesTranslations[]> {
  return getItems<Item_CountriesTranslations>(
    baseUrl,
    'countries_translations',
    token,
    query,
  );
}

/**
 * Fetches a single item from the countries_translations collection
 */
export async function getOneCountriesTranslations(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_CountriesTranslations>,
): Promise<Item_CountriesTranslations> {
  return getItem<Item_CountriesTranslations>(
    baseUrl,
    'countries_translations',
    token,
    id,
    query,
  );
}
