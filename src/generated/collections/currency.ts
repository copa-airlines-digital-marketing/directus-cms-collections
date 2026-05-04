/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * 
 * ⚠️ DEPRECATED COLLECTION ⚠️
 * This collection no longer exists in Directus.
 * Deprecated on: 2026-04-14
 * 
 * This file is kept for backward compatibility.
 * Please migrate away from this collection before it's removed.
 * To manually remove deprecated collections, run: pnpm clean:deprecated
 */

/**
 * @deprecated This collection no longer exists in Directus
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
/**
 * @deprecated This collection no longer exists in Directus
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
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getOneCurrency(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_Currency>,
): Promise<Item_Currency> {
  return getItem<Item_Currency>(baseUrl, 'currency', token, id, query);
}
