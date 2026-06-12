/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: tag
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
export async function getOneTag(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_Tag>,
): Promise<Item_Tag> {
  return getItem<Item_Tag>(baseUrl, 'tag', token, id, query);
}
