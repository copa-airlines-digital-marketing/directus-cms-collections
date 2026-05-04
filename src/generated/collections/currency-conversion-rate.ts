/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: currency_conversion_rate
 */

export interface Item_CurrencyConversionRate {
  currency?: string | null;
  id?: number;
  rate?: number | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the currency_conversion_rate collection
 */
export async function getManyCurrencyConversionRate(
  baseUrl: string,
  token: string,
  query?: Query<Item_CurrencyConversionRate>,
): Promise<Item_CurrencyConversionRate[]> {
  return getItems<Item_CurrencyConversionRate>(baseUrl, 'currency_conversion_rate', token, query);
}

/**
 * Fetches a single item from the currency_conversion_rate collection
 */
export async function getOneCurrencyConversionRate(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_CurrencyConversionRate>,
): Promise<Item_CurrencyConversionRate> {
  return getItem<Item_CurrencyConversionRate>(baseUrl, 'currency_conversion_rate', token, id, query);
}
