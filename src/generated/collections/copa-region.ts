/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: copa_region
 */

export interface Item_CopaRegion {
  date_created?: string | null;
  date_updated?: string | null;
  destinations?: unknown;
  id?: number;
  name?: string | null;
  user_created?: string | null;
  user_updated?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the copa_region collection
 */
export async function getManyCopaRegion(
  baseUrl: string,
  token: string,
  query?: Query<Item_CopaRegion>,
): Promise<Item_CopaRegion[]> {
  return getItems<Item_CopaRegion>(baseUrl, 'copa_region', token, query);
}

/**
 * Fetches a single item from the copa_region collection
 */
export async function getOneCopaRegion(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_CopaRegion>,
): Promise<Item_CopaRegion> {
  return getItem<Item_CopaRegion>(baseUrl, 'copa_region', token, id, query);
}
