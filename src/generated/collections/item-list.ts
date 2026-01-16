/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: item_list
 */

export interface Item_ItemList {
  date_created?: string | null;
  date_updated?: string | null;
  key?: string;
  status?: string;
  user_created?: string | null;
  user_updated?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the item_list collection
 */
export async function getManyItemList(
  baseUrl: string,
  token: string,
  query?: Query<Item_ItemList>,
): Promise<Item_ItemList[]> {
  return getItems<Item_ItemList>(baseUrl, 'item_list', token, query);
}

/**
 * Fetches a single item from the item_list collection
 */
export async function getOneItemList(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_ItemList>,
): Promise<Item_ItemList> {
  return getItem<Item_ItemList>(baseUrl, 'item_list', token, id, query);
}
