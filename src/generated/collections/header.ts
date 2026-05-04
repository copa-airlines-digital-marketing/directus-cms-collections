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
/**
 * @deprecated This collection no longer exists in Directus
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
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getOneHeader(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_Header>,
): Promise<Item_Header> {
  return getItem<Item_Header>(baseUrl, 'header', token, id, query);
}
