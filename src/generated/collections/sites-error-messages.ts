/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: sites_error_messages
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
