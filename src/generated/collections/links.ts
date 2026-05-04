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
/**
 * @deprecated This collection no longer exists in Directus
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
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getOneLinks(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_Links>,
): Promise<Item_Links> {
  return getItem<Item_Links>(baseUrl, 'links', token, id, query);
}
