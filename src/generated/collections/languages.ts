/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: languages
 */

export interface Item_Languages {
  code: string;
  date_created?: string | null;
  date_updated?: string | null;
  direction?: string | null;
  name: string;
  user_created?: string | null;
  user_updated?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the languages collection
 */
export async function getManyLanguages(
  baseUrl: string,
  token: string,
  query?: Query<Item_Languages>,
): Promise<Item_Languages[]> {
  return getItems<Item_Languages>(baseUrl, 'languages', token, query);
}

/**
 * Fetches a single item from the languages collection
 */
export async function getOneLanguages(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_Languages>,
): Promise<Item_Languages> {
  return getItem<Item_Languages>(baseUrl, 'languages', token, id, query);
}
