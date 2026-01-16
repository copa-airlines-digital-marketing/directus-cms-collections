/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: copyrights
 */

export interface Item_Copyrights {
  date_created?: string | null;
  date_updated?: string | null;
  id?: string;
  name: string;
  status?: string;
  translations?: unknown;
  user_created?: string | null;
  user_updated?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the copyrights collection
 */
export async function getManyCopyrights(
  baseUrl: string,
  token: string,
  query?: Query<Item_Copyrights>,
): Promise<Item_Copyrights[]> {
  return getItems<Item_Copyrights>(baseUrl, 'copyrights', token, query);
}

/**
 * Fetches a single item from the copyrights collection
 */
export async function getOneCopyrights(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_Copyrights>,
): Promise<Item_Copyrights> {
  return getItem<Item_Copyrights>(baseUrl, 'copyrights', token, id, query);
}
