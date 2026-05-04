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
export interface Item_PoiT {
  address?: string | null;
  id?: number;
  language?: string | null;
  localized_slug: string;
  long_description?: Record<string, unknown> | null;
  name: string;
  poi?: string | null;
  short_description?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the poi_t collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getManyPoiT(
  baseUrl: string,
  token: string,
  query?: Query<Item_PoiT>,
): Promise<Item_PoiT[]> {
  return getItems<Item_PoiT>(baseUrl, 'poi_t', token, query);
}

/**
 * Fetches a single item from the poi_t collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getOnePoiT(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_PoiT>,
): Promise<Item_PoiT> {
  return getItem<Item_PoiT>(baseUrl, 'poi_t', token, id, query);
}
