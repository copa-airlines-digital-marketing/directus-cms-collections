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
export interface Item_Navigation {
  date_created?: string | null;
  date_updated?: string | null;
  header?: unknown;
  icon?: number | null;
  id?: string;
  name?: string | null;
  relationships?: unknown;
  translations: unknown;
  user_created?: string | null;
  user_updated?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the navigation collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getManyNavigation(
  baseUrl: string,
  token: string,
  query?: Query<Item_Navigation>,
): Promise<Item_Navigation[]> {
  return getItems<Item_Navigation>(baseUrl, 'navigation', token, query);
}

/**
 * Fetches a single item from the navigation collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getOneNavigation(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_Navigation>,
): Promise<Item_Navigation> {
  return getItem<Item_Navigation>(baseUrl, 'navigation', token, id, query);
}
