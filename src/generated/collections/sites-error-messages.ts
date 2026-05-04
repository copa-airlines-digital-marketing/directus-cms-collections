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
export interface Item_SitesErrorMessages {
  error_code?: number | null;
  id?: number;
  sites_id?: number | null;
  Text_Content_id?: number | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the sites_error_messages collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getManySitesErrorMessages(
  baseUrl: string,
  token: string,
  query?: Query<Item_SitesErrorMessages>,
): Promise<Item_SitesErrorMessages[]> {
  return getItems<Item_SitesErrorMessages>(
    baseUrl,
    'sites_error_messages',
    token,
    query,
  );
}

/**
 * Fetches a single item from the sites_error_messages collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getOneSitesErrorMessages(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_SitesErrorMessages>,
): Promise<Item_SitesErrorMessages> {
  return getItem<Item_SitesErrorMessages>(
    baseUrl,
    'sites_error_messages',
    token,
    id,
    query,
  );
}
