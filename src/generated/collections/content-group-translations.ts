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
export interface Item_ContentGroupTranslations {
  content_group_id?: number | null;
  id?: number;
  languages_code?: string | null;
  title: string;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the content_group_translations collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getManyContentGroupTranslations(
  baseUrl: string,
  token: string,
  query?: Query<Item_ContentGroupTranslations>,
): Promise<Item_ContentGroupTranslations[]> {
  return getItems<Item_ContentGroupTranslations>(
    baseUrl,
    'content_group_translations',
    token,
    query,
  );
}

/**
 * Fetches a single item from the content_group_translations collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getOneContentGroupTranslations(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_ContentGroupTranslations>,
): Promise<Item_ContentGroupTranslations> {
  return getItem<Item_ContentGroupTranslations>(
    baseUrl,
    'content_group_translations',
    token,
    id,
    query,
  );
}
