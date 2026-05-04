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
export interface Item_CopyrightsTranslations {
  copyright: string;
  copyrights_id?: string | null;
  id?: number;
  languages_code?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the copyrights_translations collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getManyCopyrightsTranslations(
  baseUrl: string,
  token: string,
  query?: Query<Item_CopyrightsTranslations>,
): Promise<Item_CopyrightsTranslations[]> {
  return getItems<Item_CopyrightsTranslations>(
    baseUrl,
    'copyrights_translations',
    token,
    query,
  );
}

/**
 * Fetches a single item from the copyrights_translations collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getOneCopyrightsTranslations(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_CopyrightsTranslations>,
): Promise<Item_CopyrightsTranslations> {
  return getItem<Item_CopyrightsTranslations>(
    baseUrl,
    'copyrights_translations',
    token,
    id,
    query,
  );
}
