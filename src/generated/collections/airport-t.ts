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
export interface Item_AirportT {
  about?: Record<string, unknown> | null;
  airport?: string | null;
  alt_names?: string | null;
  id?: number;
  language?: string | null;
  name: string;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the airport_t collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getManyAirportT(
  baseUrl: string,
  token: string,
  query?: Query<Item_AirportT>,
): Promise<Item_AirportT[]> {
  return getItems<Item_AirportT>(baseUrl, 'airport_t', token, query);
}

/**
 * Fetches a single item from the airport_t collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getOneAirportT(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_AirportT>,
): Promise<Item_AirportT> {
  return getItem<Item_AirportT>(baseUrl, 'airport_t', token, id, query);
}
