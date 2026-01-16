/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: sites_locales
 */

export interface Item_SitesLocales {
  id?: number;
  languages_code?: string | null;
  sites_id?: number | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the sites_locales collection
 */
export async function getManySitesLocales(
  baseUrl: string,
  token: string,
  query?: Query<Item_SitesLocales>,
): Promise<Item_SitesLocales[]> {
  return getItems<Item_SitesLocales>(baseUrl, 'sites_locales', token, query);
}

/**
 * Fetches a single item from the sites_locales collection
 */
export async function getOneSitesLocales(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_SitesLocales>,
): Promise<Item_SitesLocales> {
  return getItem<Item_SitesLocales>(baseUrl, 'sites_locales', token, id, query);
}
