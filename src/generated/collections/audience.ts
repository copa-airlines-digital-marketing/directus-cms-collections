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
export interface Item_Audience {
  date_created?: string | null;
  date_updated?: string | null;
  id?: string;
  json_logic: Record<string, unknown>;
  key: string;
  name: string;
  preview_token?: string | null;
  priority?: number;
  status?: string;
  user_created?: string | null;
  user_updated?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the audience collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getManyAudience(
  baseUrl: string,
  token: string,
  query?: Query<Item_Audience>,
): Promise<Item_Audience[]> {
  return getItems<Item_Audience>(baseUrl, 'audience', token, query);
}

/**
 * Fetches a single item from the audience collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getOneAudience(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_Audience>,
): Promise<Item_Audience> {
  return getItem<Item_Audience>(baseUrl, 'audience', token, id, query);
}
