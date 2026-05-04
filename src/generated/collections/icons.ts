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
export interface Item_Icons {
  category?: string | null;
  code?: string | null;
  date_created?: string | null;
  date_updated?: string | null;
  hotel_amenities?: unknown;
  id?: number;
  image?: string | null;
  links?: unknown;
  name?: string | null;
  Relationships?: unknown;
  sites?: unknown;
  text_content_translations?: unknown;
  user_created?: string | null;
  user_updated?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the icons collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getManyIcons(
  baseUrl: string,
  token: string,
  query?: Query<Item_Icons>,
): Promise<Item_Icons[]> {
  return getItems<Item_Icons>(baseUrl, 'icons', token, query);
}

/**
 * Fetches a single item from the icons collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getOneIcons(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_Icons>,
): Promise<Item_Icons> {
  return getItem<Item_Icons>(baseUrl, 'icons', token, id, query);
}
