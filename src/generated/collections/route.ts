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
export interface Item_Route {
  active: boolean;
  date_created?: string | null;
  date_updated?: string | null;
  destination: string;
  flight_time_min?: number | null;
  id?: string;
  origin: string;
  translations: unknown;
  user_created?: string | null;
  user_updated?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the route collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getManyRoute(
  baseUrl: string,
  token: string,
  query?: Query<Item_Route>,
): Promise<Item_Route[]> {
  return getItems<Item_Route>(baseUrl, 'route', token, query);
}

/**
 * Fetches a single item from the route collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getOneRoute(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_Route>,
): Promise<Item_Route> {
  return getItem<Item_Route>(baseUrl, 'route', token, id, query);
}
