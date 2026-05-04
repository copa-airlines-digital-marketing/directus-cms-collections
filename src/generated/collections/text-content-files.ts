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
export interface Item_TextContentFiles {
  directus_files_id?: string | null;
  id?: number;
  Text_Content_id?: number | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the Text_Content_files collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getManyTextContentFiles(
  baseUrl: string,
  token: string,
  query?: Query<Item_TextContentFiles>,
): Promise<Item_TextContentFiles[]> {
  return getItems<Item_TextContentFiles>(
    baseUrl,
    'Text_Content_files',
    token,
    query,
  );
}

/**
 * Fetches a single item from the Text_Content_files collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getOneTextContentFiles(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_TextContentFiles>,
): Promise<Item_TextContentFiles> {
  return getItem<Item_TextContentFiles>(
    baseUrl,
    'Text_Content_files',
    token,
    id,
    query,
  );
}
