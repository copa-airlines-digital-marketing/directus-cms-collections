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
export interface Item_Sites {
  advanced_settings?: unknown;
  articles_association?: unknown;
  colors?: Record<string, unknown> | null;
  coming_soon_message?: number | null;
  date_created?: string | null;
  date_updated?: string | null;
  end_of_body_code?: string | null;
  environmet_status?: Record<string, unknown> | null;
  error_messages?: unknown;
  favIcon?: string | null;
  head_code?: string | null;
  id?: number;
  locales?: unknown;
  logo?: string | null;
  maintenance_message?: number | null;
  name?: string | null;
  pages?: unknown;
  preview_domain?: string | null;
  primary_domain?: string | null;
  Settings?: unknown;
  start_of_body_code?: string | null;
  translations?: unknown;
  ui_icons?: unknown;
  user_created?: string | null;
  user_updated?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the sites collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getManySites(
  baseUrl: string,
  token: string,
  query?: Query<Item_Sites>,
): Promise<Item_Sites[]> {
  return getItems<Item_Sites>(baseUrl, 'sites', token, query);
}

/**
 * Fetches a single item from the sites collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getOneSites(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_Sites>,
): Promise<Item_Sites> {
  return getItem<Item_Sites>(baseUrl, 'sites', token, id, query);
}
