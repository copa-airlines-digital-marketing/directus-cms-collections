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
export interface Item_ContentGroup {
  content?: unknown;
  date_created?: string | null;
  date_updated?: string | null;
  id?: number;
  name: string;
  status?: string;
  translations?: unknown;
  user_created?: string | null;
  user_updated?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the content_group collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getManyContentGroup(
  baseUrl: string,
  token: string,
  query?: Query<Item_ContentGroup>,
): Promise<Item_ContentGroup[]> {
  return getItems<Item_ContentGroup>(baseUrl, 'content_group', token, query);
}

/**
 * Fetches a single item from the content_group collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getOneContentGroup(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_ContentGroup>,
): Promise<Item_ContentGroup> {
  return getItem<Item_ContentGroup>(baseUrl, 'content_group', token, id, query);
}
