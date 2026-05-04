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

import type { GeoJSON } from '../../client/types.js';

/**
 * @deprecated This collection no longer exists in Directus
 */
export interface Item_Poi {
  address_freeform?: string | null;
  category?: string | null;
  city?: string | null;
  date_created?: string | null;
  date_updated?: string | null;
  featured?: boolean;
  id?: string;
  images?: unknown;
  location: GeoJSON;
  opening_hours_json?: Record<string, unknown> | null;
  phone?: string | null;
  price_range?: string | null;
  status?: string;
  tags?: unknown;
  translations: unknown;
  user_created?: string | null;
  user_updated?: string | null;
  website?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the poi collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getManyPoi(
  baseUrl: string,
  token: string,
  query?: Query<Item_Poi>,
): Promise<Item_Poi[]> {
  return getItems<Item_Poi>(baseUrl, 'poi', token, query);
}

/**
 * Fetches a single item from the poi collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getOnePoi(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_Poi>,
): Promise<Item_Poi> {
  return getItem<Item_Poi>(baseUrl, 'poi', token, id, query);
}
