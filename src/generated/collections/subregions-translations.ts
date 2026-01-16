/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: subregions_translations
 */

export interface Item_SubregionsTranslations {
  id?: number;
  languages_code?: string | null;
  name: string;
  slug_localized: string;
  subregions_code_m49?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the subregions_translations collection
 */
export async function getManySubregionsTranslations(
  baseUrl: string,
  token: string,
  query?: Query<Item_SubregionsTranslations>,
): Promise<Item_SubregionsTranslations[]> {
  return getItems<Item_SubregionsTranslations>(
    baseUrl,
    'subregions_translations',
    token,
    query,
  );
}

/**
 * Fetches a single item from the subregions_translations collection
 */
export async function getOneSubregionsTranslations(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_SubregionsTranslations>,
): Promise<Item_SubregionsTranslations> {
  return getItem<Item_SubregionsTranslations>(
    baseUrl,
    'subregions_translations',
    token,
    id,
    query,
  );
}
