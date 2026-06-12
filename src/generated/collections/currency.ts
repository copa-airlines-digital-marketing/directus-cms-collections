/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: currency
 */

export interface Item_Currency {
  code?: string;
  date_created?: string | null;
  date_updated?: string | null;
  decimal_separator: string;
  format?: string | null;
  symbol: string;
  thousand_separator: string;
  user_created?: string | null;
  user_updated?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the currency collection
 */
export async function getManyCurrency(
  baseUrl: string,
  token: string,
  query?: Query<Item_Currency>,
): Promise<Item_Currency[]> {
  return getItems<Item_Currency>(baseUrl, 'currency', token, query);
}

/**
 * Fetches a single item from the currency collection
 */
export async function getOneCurrency(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_Currency>,
): Promise<Item_Currency> {
  return getItem<Item_Currency>(baseUrl, 'currency', token, id, query);
}
