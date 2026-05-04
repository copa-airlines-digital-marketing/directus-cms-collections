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
export interface Item_RouteT {
  body?: Record<string, unknown> | null;
  headline?: string | null;
  id?: number;
  language?: string | null;
  route?: string | null;
  teaser?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the route_t collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getManyRouteT(
  baseUrl: string,
  token: string,
  query?: Query<Item_RouteT>,
): Promise<Item_RouteT[]> {
  return getItems<Item_RouteT>(baseUrl, 'route_t', token, query);
}

/**
 * Fetches a single item from the route_t collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getOneRouteT(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_RouteT>,
): Promise<Item_RouteT> {
  return getItem<Item_RouteT>(baseUrl, 'route_t', token, id, query);
}
