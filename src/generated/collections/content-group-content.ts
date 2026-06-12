/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: content_group_content
 */

export interface Item_ContentGroupContent {
  collection?: string | null;
  component?: string | null;
  content_group_id?: number | null;
  id?: number;
  item?: string | null;
  order?: number | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the content_group_content collection
 */
export async function getManyContentGroupContent(
  baseUrl: string,
  token: string,
  query?: Query<Item_ContentGroupContent>,
): Promise<Item_ContentGroupContent[]> {
  return getItems<Item_ContentGroupContent>(
    baseUrl,
    'content_group_content',
    token,
    query,
  );
}

/**
 * Fetches a single item from the content_group_content collection
 */
export async function getOneContentGroupContent(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_ContentGroupContent>,
): Promise<Item_ContentGroupContent> {
  return getItem<Item_ContentGroupContent>(
    baseUrl,
    'content_group_content',
    token,
    id,
    query,
  );
}
