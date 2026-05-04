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
export interface Item_TextContentTranslations {
  call_to_actions?: Record<string, unknown> | null;
  description?: string | null;
  embed_media?: string | null;
  icon?: number | null;
  id?: number;
  languages_code?: string | null;
  media?: string | null;
  Text_Content_id?: number | null;
  title?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the Text_Content_translations collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getManyTextContentTranslations(
  baseUrl: string,
  token: string,
  query?: Query<Item_TextContentTranslations>,
): Promise<Item_TextContentTranslations[]> {
  return getItems<Item_TextContentTranslations>(
    baseUrl,
    'Text_Content_translations',
    token,
    query,
  );
}

/**
 * Fetches a single item from the Text_Content_translations collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getOneTextContentTranslations(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_TextContentTranslations>,
): Promise<Item_TextContentTranslations> {
  return getItem<Item_TextContentTranslations>(
    baseUrl,
    'Text_Content_translations',
    token,
    id,
    query,
  );
}
