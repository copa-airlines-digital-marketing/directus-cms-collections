/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: tags_translations
 */

export interface Item_TagsTranslations {
  id?: number;
  languages_code?: string | null;
  name: string;
  slug_localized: string;
  tags_slug?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the tags_translations collection
 */
export async function getManyTagsTranslations(
  baseUrl: string,
  token: string,
  query?: Query<Item_TagsTranslations>,
): Promise<Item_TagsTranslations[]> {
  return getItems<Item_TagsTranslations>(
    baseUrl,
    'tags_translations',
    token,
    query,
  );
}

/**
 * Fetches a single item from the tags_translations collection
 */
export async function getOneTagsTranslations(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_TagsTranslations>,
): Promise<Item_TagsTranslations> {
  return getItem<Item_TagsTranslations>(
    baseUrl,
    'tags_translations',
    token,
    id,
    query,
  );
}
