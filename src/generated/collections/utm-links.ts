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
export interface Item_UtmLinks {
  area?: string | null;
  campaign_id?: string;
  date_created?: string | null;
  date_updated?: string | null;
  final_url?: string;
  id?: string;
  internal_id?: string | null;
  landing_url: string;
  markets: Record<string, unknown>;
  month_year: string;
  'notice-woxr4g'?: unknown;
  type: string;
  user_created?: string | null;
  user_updated?: string | null;
  utm_campaing: string;
  utm_content?: string | null;
  utm_medium: string;
  utm_source: string;
  utm_term?: string | null;
  vendor: string;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the utm_links collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getManyUtmLinks(
  baseUrl: string,
  token: string,
  query?: Query<Item_UtmLinks>,
): Promise<Item_UtmLinks[]> {
  return getItems<Item_UtmLinks>(baseUrl, 'utm_links', token, query);
}

/**
 * Fetches a single item from the utm_links collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getOneUtmLinks(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_UtmLinks>,
): Promise<Item_UtmLinks> {
  return getItem<Item_UtmLinks>(baseUrl, 'utm_links', token, id, query);
}
