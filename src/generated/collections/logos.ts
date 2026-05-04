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
export interface Item_Logos {
  code?: string | null;
  date_created?: string | null;
  date_updated?: string | null;
  id?: string;
  image?: string | null;
  name?: string | null;
  user_created?: string | null;
  user_updated?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the logos collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getManyLogos(
  baseUrl: string,
  token: string,
  query?: Query<Item_Logos>,
): Promise<Item_Logos[]> {
  return getItems<Item_Logos>(baseUrl, 'logos', token, query);
}

/**
 * Fetches a single item from the logos collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getOneLogos(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_Logos>,
): Promise<Item_Logos> {
  return getItem<Item_Logos>(baseUrl, 'logos', token, id, query);
}
