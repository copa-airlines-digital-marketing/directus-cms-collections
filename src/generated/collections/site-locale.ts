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
export interface Item_SiteLocale {
  currency: string;
  date_created?: string | null;
  date_updated?: string | null;
  id?: string;
  is_default?: boolean;
  language: string;
  market_code: string;
  site: string;
  user_created?: string | null;
  user_updated?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the site_locale collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getManySiteLocale(
  baseUrl: string,
  token: string,
  query?: Query<Item_SiteLocale>,
): Promise<Item_SiteLocale[]> {
  return getItems<Item_SiteLocale>(baseUrl, 'site_locale', token, query);
}

/**
 * Fetches a single item from the site_locale collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getOneSiteLocale(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_SiteLocale>,
): Promise<Item_SiteLocale> {
  return getItem<Item_SiteLocale>(baseUrl, 'site_locale', token, id, query);
}
