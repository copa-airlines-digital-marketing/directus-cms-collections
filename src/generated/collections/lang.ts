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
export interface Item_Lang {
  code: string;
  date_created?: string | null;
  date_updated?: string | null;
  name?: string | null;
  status?: string | null;
  user_created?: string | null;
  user_updated?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the lang collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getManyLang(
  baseUrl: string,
  token: string,
  query?: Query<Item_Lang>,
): Promise<Item_Lang[]> {
  return getItems<Item_Lang>(baseUrl, 'lang', token, query);
}

/**
 * Fetches a single item from the lang collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getOneLang(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_Lang>,
): Promise<Item_Lang> {
  return getItem<Item_Lang>(baseUrl, 'lang', token, id, query);
}
