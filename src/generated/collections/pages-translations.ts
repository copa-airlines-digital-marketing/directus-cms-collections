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
export interface Item_PagesTranslations {
  id?: number;
  languages_code?: string | null;
  meta_description: string;
  pages_id?: number | null;
  path?: string | null;
  title_tag: string;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the pages_translations collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getManyPagesTranslations(
  baseUrl: string,
  token: string,
  query?: Query<Item_PagesTranslations>,
): Promise<Item_PagesTranslations[]> {
  return getItems<Item_PagesTranslations>(
    baseUrl,
    'pages_translations',
    token,
    query,
  );
}

/**
 * Fetches a single item from the pages_translations collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getOnePagesTranslations(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_PagesTranslations>,
): Promise<Item_PagesTranslations> {
  return getItem<Item_PagesTranslations>(
    baseUrl,
    'pages_translations',
    token,
    id,
    query,
  );
}
