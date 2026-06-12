/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: Text_Content_files
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
