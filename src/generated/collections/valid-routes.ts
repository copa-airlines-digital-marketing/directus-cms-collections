/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: valid_routes
 */

export interface Item_ValidRoutes {
  date_created?: string | null;
  date_updated?: string | null;
  destination?: string | null;
  destination_code?: string | null;
  error?: string | null;
  id?: string;
  is_active?: boolean;
  is_codeshare?: boolean | null;
  operation_date?: string | null;
  origin?: string | null;
  origin_code?: string | null;
  originDestinationPair?: string | null;
  sort?: number | null;
  source?: string | null;
  source_batch?: string | null;
  source_updated_at?: string | null;
  status?: string;
  user_created?: string | null;
  user_updated?: string | null;
  validate?: boolean;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the valid_routes collection
 */
export async function getManyValidRoutes(
  baseUrl: string,
  token: string,
  query?: Query<Item_ValidRoutes>,
): Promise<Item_ValidRoutes[]> {
  return getItems<Item_ValidRoutes>(baseUrl, 'valid_routes', token, query);
}

/**
 * Fetches a single item from the valid_routes collection
 */
export async function getOneValidRoutes(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_ValidRoutes>,
): Promise<Item_ValidRoutes> {
  return getItem<Item_ValidRoutes>(baseUrl, 'valid_routes', token, id, query);
}
