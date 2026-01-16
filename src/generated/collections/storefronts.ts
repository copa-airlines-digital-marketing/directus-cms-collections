/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: storefronts
 */

export interface Item_Storefronts {
  code: string;
  date_created?: string | null;
  date_updated?: string | null;
  name?: string | null;
  status: string;
  user_created?: string | null;
  user_updated?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the storefronts collection
 */
export async function getManyStorefronts(
  baseUrl: string,
  token: string,
  query?: Query<Item_Storefronts>,
): Promise<Item_Storefronts[]> {
  return getItems<Item_Storefronts>(baseUrl, 'storefronts', token, query);
}

/**
 * Fetches a single item from the storefronts collection
 */
export async function getOneStorefronts(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_Storefronts>,
): Promise<Item_Storefronts> {
  return getItem<Item_Storefronts>(baseUrl, 'storefronts', token, id, query);
}
