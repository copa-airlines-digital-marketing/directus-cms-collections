/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: route_t
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
export async function getOneRouteT(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_RouteT>,
): Promise<Item_RouteT> {
  return getItem<Item_RouteT>(baseUrl, 'route_t', token, id, query);
}
