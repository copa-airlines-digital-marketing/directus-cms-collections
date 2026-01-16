/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: tag_t
 */

export interface Item_TagT {
  id?: number;
  label?: string | null;
  language?: string | null;
  tag?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the tag_t collection
 */
export async function getManyTagT(
  baseUrl: string,
  token: string,
  query?: Query<Item_TagT>,
): Promise<Item_TagT[]> {
  return getItems<Item_TagT>(baseUrl, 'tag_t', token, query);
}

/**
 * Fetches a single item from the tag_t collection
 */
export async function getOneTagT(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_TagT>,
): Promise<Item_TagT> {
  return getItem<Item_TagT>(baseUrl, 'tag_t', token, id, query);
}
