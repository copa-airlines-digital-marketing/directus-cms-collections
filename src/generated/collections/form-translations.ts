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
/**
 * @deprecated This collection no longer exists in Directus
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
/**
 * @deprecated This collection no longer exists in Directus
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
