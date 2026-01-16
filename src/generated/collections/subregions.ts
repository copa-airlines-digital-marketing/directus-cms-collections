/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: subregions
 */

export interface Item_Subregions {
  code_m49?: string;
  date_created?: string | null;
  date_updated?: string | null;
  is_active?: boolean | null;
  order?: number | null;
  region: string;
  slug: string;
  translations: unknown;
  user_created?: string | null;
  user_updated?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the subregions collection
 */
export async function getManySubregions(
  baseUrl: string,
  token: string,
  query?: Query<Item_Subregions>,
): Promise<Item_Subregions[]> {
  return getItems<Item_Subregions>(baseUrl, 'subregions', token, query);
}

/**
 * Fetches a single item from the subregions collection
 */
export async function getOneSubregions(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_Subregions>,
): Promise<Item_Subregions> {
  return getItem<Item_Subregions>(baseUrl, 'subregions', token, id, query);
}
