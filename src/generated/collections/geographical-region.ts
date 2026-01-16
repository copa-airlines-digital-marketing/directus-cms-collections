/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: geographical_region
 */

export interface Item_GeographicalRegion {
  date_created?: string | null;
  date_updated?: string | null;
  destinations?: unknown;
  id?: number;
  name?: string | null;
  sort?: number | null;
  status?: string;
  translations?: unknown;
  user_created?: string | null;
  user_updated?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the geographical_region collection
 */
export async function getManyGeographicalRegion(
  baseUrl: string,
  token: string,
  query?: Query<Item_GeographicalRegion>,
): Promise<Item_GeographicalRegion[]> {
  return getItems<Item_GeographicalRegion>(
    baseUrl,
    'geographical_region',
    token,
    query,
  );
}

/**
 * Fetches a single item from the geographical_region collection
 */
export async function getOneGeographicalRegion(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_GeographicalRegion>,
): Promise<Item_GeographicalRegion> {
  return getItem<Item_GeographicalRegion>(
    baseUrl,
    'geographical_region',
    token,
    id,
    query,
  );
}
