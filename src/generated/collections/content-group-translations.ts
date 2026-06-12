/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: content_group_translations
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
