/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: categories
 */

export interface Item_Categories {
  date_created?: string | null;
  date_updated?: string | null;
  description?: string | null;
  domain: number;
  domain_and_key?: string;
  effective_from?: string | null;
  effective_to?: string | null;
  id?: number;
  key: string;
  notes?: string | null;
  replacement_category?: number | null;
  sort_order?: number | null;
  status: string;
  translations: unknown;
  user_created?: string | null;
  user_updated?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the categories collection
 */
export async function getManyCategories(
  baseUrl: string,
  token: string,
  query?: Query<Item_Categories>,
): Promise<Item_Categories[]> {
  return getItems<Item_Categories>(baseUrl, 'categories', token, query);
}

/**
 * Fetches a single item from the categories collection
 */
export async function getOneCategories(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_Categories>,
): Promise<Item_Categories> {
  return getItem<Item_Categories>(baseUrl, 'categories', token, id, query);
}
