/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: categories_translations
 */

export interface Item_CategoriesTranslations {
  categories_id?: number | null;
  id?: number;
  label: string;
  languages_code?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the categories_translations collection
 */
export async function getManyCategoriesTranslations(
  baseUrl: string,
  token: string,
  query?: Query<Item_CategoriesTranslations>,
): Promise<Item_CategoriesTranslations[]> {
  return getItems<Item_CategoriesTranslations>(
    baseUrl,
    'categories_translations',
    token,
    query,
  );
}

/**
 * Fetches a single item from the categories_translations collection
 */
export async function getOneCategoriesTranslations(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_CategoriesTranslations>,
): Promise<Item_CategoriesTranslations> {
  return getItem<Item_CategoriesTranslations>(
    baseUrl,
    'categories_translations',
    token,
    id,
    query,
  );
}
