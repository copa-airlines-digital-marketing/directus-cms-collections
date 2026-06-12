/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: destination_of_the_month
 */

export interface Item_DestinationOfTheMonth {
  book_limit_date?: string | null;
  book_limit_year?: string | null;
  destination_of_the_month_cards?: unknown;
  destination_slug?: string | null;
  fly_limit_date?: string | null;
  fly_limit_year?: string | null;
  id?: number;
  main_image?: string | null;
  status?: string;
  translations?: unknown;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the destination_of_the_month collection
 */
export async function getManyDestinationOfTheMonth(
  baseUrl: string,
  token: string,
  query?: Query<Item_DestinationOfTheMonth>,
): Promise<Item_DestinationOfTheMonth[]> {
  return getItems<Item_DestinationOfTheMonth>(
    baseUrl,
    'destination_of_the_month',
    token,
    query,
  );
}

/**
 * Fetches a single item from the destination_of_the_month collection
 */
export async function getOneDestinationOfTheMonth(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_DestinationOfTheMonth>,
): Promise<Item_DestinationOfTheMonth> {
  return getItem<Item_DestinationOfTheMonth>(
    baseUrl,
    'destination_of_the_month',
    token,
    id,
    query,
  );
}
