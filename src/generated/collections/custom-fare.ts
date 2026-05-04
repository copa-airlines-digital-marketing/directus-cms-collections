/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: custom_fare
 */

export interface Item_CustomFare {
  campaign?: string | null;
  departure?: string | null;
  destination: string;
  end_date?: string | null;
  origin: string;
  price?: number;
  price_before?: number;
  return?: string | null;
  start_date?: string | null;
  taxes?: number | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the custom_fare collection
 */
export async function getManyCustomFare(
  baseUrl: string,
  token: string,
  query?: Query<Item_CustomFare>,
): Promise<Item_CustomFare[]> {
  return getItems<Item_CustomFare>(baseUrl, 'custom_fare', token, query);
}

/**
 * Fetches a single item from the custom_fare collection
 */
export async function getOneCustomFare(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_CustomFare>,
): Promise<Item_CustomFare> {
  return getItem<Item_CustomFare>(baseUrl, 'custom_fare', token, id, query);
}
