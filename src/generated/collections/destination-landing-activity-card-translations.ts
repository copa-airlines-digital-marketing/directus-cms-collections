/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: destination_landing_activity_card_translations
 */

export interface Item_DestinationLandingActivityCardTranslations {
  description?: string | null;
  destination_landing_activity_cards_id?: number | null;
  id?: number;
  image_alt?: string | null;
  languages_code?: string | null;
  link_label?: string | null;
  title?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the destination_landing_activity_card_translations collection
 */
export async function getManyDestinationLandingActivityCardTranslations(
  baseUrl: string,
  token: string,
  query?: Query<Item_DestinationLandingActivityCardTranslations>,
): Promise<Item_DestinationLandingActivityCardTranslations[]> {
  return getItems<Item_DestinationLandingActivityCardTranslations>(
    baseUrl,
    'destination_landing_activity_card_translations',
    token,
    query,
  );
}

/**
 * Fetches a single item from the destination_landing_activity_card_translations collection
 */
export async function getOneDestinationLandingActivityCardTranslations(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_DestinationLandingActivityCardTranslations>,
): Promise<Item_DestinationLandingActivityCardTranslations> {
  return getItem<Item_DestinationLandingActivityCardTranslations>(
    baseUrl,
    'destination_landing_activity_card_translations',
    token,
    id,
    query,
  );
}
