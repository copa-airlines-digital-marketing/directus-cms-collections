/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: sites_icons
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
export async function getOneSitesIcons(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_SitesIcons>,
): Promise<Item_SitesIcons> {
  return getItem<Item_SitesIcons>(baseUrl, 'sites_icons', token, id, query);
}
