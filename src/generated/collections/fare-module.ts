/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: fare_module
 */

export interface Item_FareModule {
  date_created?: string | null;
  date_updated?: string | null;
  id?: string;
  name: string;
  translations?: unknown;
  user_created?: string | null;
  user_updated?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the fare_module collection
 */
export async function getManyFareModule(
  baseUrl: string,
  token: string,
  query?: Query<Item_FareModule>,
): Promise<Item_FareModule[]> {
  return getItems<Item_FareModule>(baseUrl, 'fare_module', token, query);
}

/**
 * Fetches a single item from the fare_module collection
 */
export async function getOneFareModule(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_FareModule>,
): Promise<Item_FareModule> {
  return getItem<Item_FareModule>(baseUrl, 'fare_module', token, id, query);
}
