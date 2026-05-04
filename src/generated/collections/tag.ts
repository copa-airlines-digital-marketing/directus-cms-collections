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
export interface Item_Tag {
  category: string;
  date_created?: string | null;
  date_updated?: string | null;
  id?: string;
  key: string;
  translations: unknown;
  user_created?: string | null;
  user_updated?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the tag collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getManyTag(
  baseUrl: string,
  token: string,
  query?: Query<Item_Tag>,
): Promise<Item_Tag[]> {
  return getItems<Item_Tag>(baseUrl, 'tag', token, query);
}

/**
 * Fetches a single item from the tag collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getOneTag(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_Tag>,
): Promise<Item_Tag> {
  return getItem<Item_Tag>(baseUrl, 'tag', token, id, query);
}
