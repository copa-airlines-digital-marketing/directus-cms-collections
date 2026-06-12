/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: destination_of_the_month_cards_translations
 */

export interface Item_DestinationOfTheMonthCardsTranslations {
  card_description?: string | null;
  card_image_alt?: string | null;
  card_title?: string | null;
  destination_of_the_month_cards_id?: number | null;
  id?: number;
  languages_code?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the destination_of_the_month_cards_translations collection
 */
export async function getManyDestinationOfTheMonthCardsTranslations(
  baseUrl: string,
  token: string,
  query?: Query<Item_DestinationOfTheMonthCardsTranslations>,
): Promise<Item_DestinationOfTheMonthCardsTranslations[]> {
  return getItems<Item_DestinationOfTheMonthCardsTranslations>(
    baseUrl,
    'destination_of_the_month_cards_translations',
    token,
    query,
  );
}

/**
 * Fetches a single item from the destination_of_the_month_cards_translations collection
 */
export async function getOneDestinationOfTheMonthCardsTranslations(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_DestinationOfTheMonthCardsTranslations>,
): Promise<Item_DestinationOfTheMonthCardsTranslations> {
  return getItem<Item_DestinationOfTheMonthCardsTranslations>(
    baseUrl,
    'destination_of_the_month_cards_translations',
    token,
    id,
    query,
  );
}
