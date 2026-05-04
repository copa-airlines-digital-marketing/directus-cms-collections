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
export interface Item_SitesIcons {
  icons_id?: number | null;
  id?: number;
  sites_id?: number | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the sites_icons collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getManySitesIcons(
  baseUrl: string,
  token: string,
  query?: Query<Item_SitesIcons>,
): Promise<Item_SitesIcons[]> {
  return getItems<Item_SitesIcons>(baseUrl, 'sites_icons', token, query);
}

/**
 * Fetches a single item from the sites_icons collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getOneSitesIcons(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_SitesIcons>,
): Promise<Item_SitesIcons> {
  return getItem<Item_SitesIcons>(baseUrl, 'sites_icons', token, id, query);
}
