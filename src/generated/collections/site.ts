/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: site
 */

export interface Item_Site {
  brand_logo?: string | null;
  date_created?: string | null;
  date_updated?: string | null;
  default_currency: string;
  default_language: string;
  id?: string;
  key: string;
  name: string;
  status?: string;
  user_created?: string | null;
  user_updated?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the site collection
 */
export async function getManySite(
  baseUrl: string,
  token: string,
  query?: Query<Item_Site>,
): Promise<Item_Site[]> {
  return getItems<Item_Site>(baseUrl, 'site', token, query);
}

/**
 * Fetches a single item from the site collection
 */
export async function getOneSite(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_Site>,
): Promise<Item_Site> {
  return getItem<Item_Site>(baseUrl, 'site', token, id, query);
}
