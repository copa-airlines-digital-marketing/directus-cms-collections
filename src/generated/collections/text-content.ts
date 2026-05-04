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
export interface Item_TextContent {
  date_created?: string | null;
  date_updated?: string | null;
  icon?: number | null;
  id?: number;
  image?: string | null;
  name?: string | null;
  relationships?: unknown;
  site_maintenance_message?: number | null;
  sites_coming_soon_message?: unknown;
  sites_error_messages?: unknown;
  translations?: unknown;
  user_created?: string | null;
  user_updated?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the Text_Content collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getManyTextContent(
  baseUrl: string,
  token: string,
  query?: Query<Item_TextContent>,
): Promise<Item_TextContent[]> {
  return getItems<Item_TextContent>(baseUrl, 'Text_Content', token, query);
}

/**
 * Fetches a single item from the Text_Content collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getOneTextContent(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_TextContent>,
): Promise<Item_TextContent> {
  return getItem<Item_TextContent>(baseUrl, 'Text_Content', token, id, query);
}
