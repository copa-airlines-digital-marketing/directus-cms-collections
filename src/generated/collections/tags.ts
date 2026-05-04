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
export interface Item_Tags {
  color_hexa?: string | null;
  date_created?: string | null;
  date_updated?: string | null;
  is_active?: boolean | null;
  'notice-xuhuvz'?: unknown;
  order?: number | null;
  parent_tag?: string | null;
  slug?: string;
  tag_children?: unknown;
  tag_type: string;
  translations: unknown;
  user_created?: string | null;
  user_updated?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the tags collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getManyTags(
  baseUrl: string,
  token: string,
  query?: Query<Item_Tags>,
): Promise<Item_Tags[]> {
  return getItems<Item_Tags>(baseUrl, 'tags', token, query);
}

/**
 * Fetches a single item from the tags collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getOneTags(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_Tags>,
): Promise<Item_Tags> {
  return getItem<Item_Tags>(baseUrl, 'tags', token, id, query);
}
