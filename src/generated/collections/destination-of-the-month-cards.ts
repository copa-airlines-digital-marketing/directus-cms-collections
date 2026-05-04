/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: destination_of_the_month_cards
 */

export interface Item_DestinationOfTheMonthCards {
  card_image?: string | null;
  destination_of_the_month_id?: number | null;
  id?: number;
  translations?: unknown;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the destination_of_the_month_cards collection
 */
export async function getManyDestinationOfTheMonthCards(
  baseUrl: string,
  token: string,
  query?: Query<Item_DestinationOfTheMonthCards>,
): Promise<Item_DestinationOfTheMonthCards[]> {
  return getItems<Item_DestinationOfTheMonthCards>(baseUrl, 'destination_of_the_month_cards', token, query);
}

/**
 * Fetches a single item from the destination_of_the_month_cards collection
 */
export async function getOneDestinationOfTheMonthCards(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_DestinationOfTheMonthCards>,
): Promise<Item_DestinationOfTheMonthCards> {
  return getItem<Item_DestinationOfTheMonthCards>(baseUrl, 'destination_of_the_month_cards', token, id, query);
}
