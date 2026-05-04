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
export interface Item_Colors {
  date_created?: string | null;
  date_updated?: string | null;
  hex?: string;
  name?: string | null;
  user_created?: string | null;
  user_updated?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the colors collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getManyColors(
  baseUrl: string,
  token: string,
  query?: Query<Item_Colors>,
): Promise<Item_Colors[]> {
  return getItems<Item_Colors>(baseUrl, 'colors', token, query);
}

/**
 * Fetches a single item from the colors collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getOneColors(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_Colors>,
): Promise<Item_Colors> {
  return getItem<Item_Colors>(baseUrl, 'colors', token, id, query);
}
