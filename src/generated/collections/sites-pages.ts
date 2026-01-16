/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: sites_pages
 */

export interface Item_SitesPages {
  id?: number;
  page_type: string;
  pages_id?: number | null;
  sites_id?: number | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the sites_pages collection
 */
export async function getManySitesPages(
  baseUrl: string,
  token: string,
  query?: Query<Item_SitesPages>,
): Promise<Item_SitesPages[]> {
  return getItems<Item_SitesPages>(baseUrl, 'sites_pages', token, query);
}

/**
 * Fetches a single item from the sites_pages collection
 */
export async function getOneSitesPages(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_SitesPages>,
): Promise<Item_SitesPages> {
  return getItem<Item_SitesPages>(baseUrl, 'sites_pages', token, id, query);
}
