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
/**
 * @deprecated This collection no longer exists in Directus
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
/**
 * @deprecated This collection no longer exists in Directus
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
