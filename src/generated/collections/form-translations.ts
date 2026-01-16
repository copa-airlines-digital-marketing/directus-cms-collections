/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: form_translations
 */

export interface Item_FormTranslations {
  form_id?: string | null;
  id?: number;
  inputs?: Record<string, unknown> | null;
  languages_code?: string | null;
  legend?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the form_translations collection
 */
export async function getManyFormTranslations(
  baseUrl: string,
  token: string,
  query?: Query<Item_FormTranslations>,
): Promise<Item_FormTranslations[]> {
  return getItems<Item_FormTranslations>(
    baseUrl,
    'form_translations',
    token,
    query,
  );
}

/**
 * Fetches a single item from the form_translations collection
 */
export async function getOneFormTranslations(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_FormTranslations>,
): Promise<Item_FormTranslations> {
  return getItem<Item_FormTranslations>(
    baseUrl,
    'form_translations',
    token,
    id,
    query,
  );
}
