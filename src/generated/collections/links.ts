/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: links
 */

export interface Item_Links {
  date_created?: string | null;
  date_updated?: string | null;
  href: string;
  hreflang?: string | null;
  icon?: number | null;
  id?: number;
  image?: string | null;
  navigation_translations?: unknown;
  ping?: string | null;
  referrerpolicy?: Record<string, unknown> | null;
  rel?: Record<string, unknown> | null;
  relationships?: unknown;
  target: string;
  text: string;
  user_created?: string | null;
  user_updated?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the links collection
 */
export async function getManyLinks(
  baseUrl: string,
  token: string,
  query?: Query<Item_Links>,
): Promise<Item_Links[]> {
  return getItems<Item_Links>(baseUrl, 'links', token, query);
}

/**
 * Fetches a single item from the links collection
 */
export async function getOneLinks(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_Links>,
): Promise<Item_Links> {
  return getItem<Item_Links>(baseUrl, 'links', token, id, query);
}
