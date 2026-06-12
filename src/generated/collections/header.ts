/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: header
 */

export interface Item_Header {
  date_created?: string | null;
  date_updated?: string | null;
  id?: number;
  include_search?: boolean | null;
  name: string;
  navigations: unknown;
  sort?: number | null;
  status: string;
  user_created?: string | null;
  user_updated?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the header collection
 */
export async function getManyHeader(
  baseUrl: string,
  token: string,
  query?: Query<Item_Header>,
): Promise<Item_Header[]> {
  return getItems<Item_Header>(baseUrl, 'header', token, query);
}

/**
 * Fetches a single item from the header collection
 */
export async function getOneHeader(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_Header>,
): Promise<Item_Header> {
  return getItem<Item_Header>(baseUrl, 'header', token, id, query);
}
