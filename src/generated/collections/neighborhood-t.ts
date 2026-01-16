/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: neighborhood_t
 */

export interface Item_NeighborhoodT {
  id?: number;
  intro?: Record<string, unknown> | null;
  language?: string | null;
  localized_slug: string;
  name: string;
  neighborhood?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the neighborhood_t collection
 */
export async function getManyNeighborhoodT(
  baseUrl: string,
  token: string,
  query?: Query<Item_NeighborhoodT>,
): Promise<Item_NeighborhoodT[]> {
  return getItems<Item_NeighborhoodT>(baseUrl, 'neighborhood_t', token, query);
}

/**
 * Fetches a single item from the neighborhood_t collection
 */
export async function getOneNeighborhoodT(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_NeighborhoodT>,
): Promise<Item_NeighborhoodT> {
  return getItem<Item_NeighborhoodT>(
    baseUrl,
    'neighborhood_t',
    token,
    id,
    query,
  );
}
