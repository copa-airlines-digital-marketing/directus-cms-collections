/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: region
 */

export interface Item_Region {
  code_m49: string;
  date_created?: string | null;
  date_updated?: string | null;
  is_active?: boolean | null;
  order?: number | null;
  slug: string;
  subregions?: unknown;
  translations: unknown;
  user_created?: string | null;
  user_updated?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the region collection
 */
export async function getManyRegion(
  baseUrl: string,
  token: string,
  query?: Query<Item_Region>,
): Promise<Item_Region[]> {
  return getItems<Item_Region>(baseUrl, 'region', token, query);
}

/**
 * Fetches a single item from the region collection
 */
export async function getOneRegion(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_Region>,
): Promise<Item_Region> {
  return getItem<Item_Region>(baseUrl, 'region', token, id, query);
}
