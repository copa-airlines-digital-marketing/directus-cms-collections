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
export interface Item_SitesTranslations {
  id?: number;
  labels?: Record<string, unknown> | null;
  languages_code?: string | null;
  sites_id?: number | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the sites_translations collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getManySitesTranslations(
  baseUrl: string,
  token: string,
  query?: Query<Item_SitesTranslations>,
): Promise<Item_SitesTranslations[]> {
  return getItems<Item_SitesTranslations>(
    baseUrl,
    'sites_translations',
    token,
    query,
  );
}

/**
 * Fetches a single item from the sites_translations collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getOneSitesTranslations(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_SitesTranslations>,
): Promise<Item_SitesTranslations> {
  return getItem<Item_SitesTranslations>(
    baseUrl,
    'sites_translations',
    token,
    id,
    query,
  );
}
