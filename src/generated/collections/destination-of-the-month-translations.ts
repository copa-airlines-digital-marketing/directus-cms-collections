/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: destination_of_the_month_translations
 */

export interface Item_DestinationOfTheMonthTranslations {
  destination_label?: string | null;
  destination_of_the_month_id?: number | null;
  id?: number;
  intro_description?: string | null;
  intro_title?: string | null;
  languages_code?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the destination_of_the_month_translations collection
 */
export async function getManyDestinationOfTheMonthTranslations(
  baseUrl: string,
  token: string,
  query?: Query<Item_DestinationOfTheMonthTranslations>,
): Promise<Item_DestinationOfTheMonthTranslations[]> {
  return getItems<Item_DestinationOfTheMonthTranslations>(
    baseUrl,
    'destination_of_the_month_translations',
    token,
    query,
  );
}

/**
 * Fetches a single item from the destination_of_the_month_translations collection
 */
export async function getOneDestinationOfTheMonthTranslations(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_DestinationOfTheMonthTranslations>,
): Promise<Item_DestinationOfTheMonthTranslations> {
  return getItem<Item_DestinationOfTheMonthTranslations>(
    baseUrl,
    'destination_of_the_month_translations',
    token,
    id,
    query,
  );
}
