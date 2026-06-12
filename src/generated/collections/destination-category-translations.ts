/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: destination_category_translations
 */

export interface Item_DestinationCategoryTranslations {
  airtfx_uri?: string | null;
  destination_category_id?: number | null;
  id?: number;
  languages_code?: string | null;
  name?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the destination_category_translations collection
 */
export async function getManyDestinationCategoryTranslations(
  baseUrl: string,
  token: string,
  query?: Query<Item_DestinationCategoryTranslations>,
): Promise<Item_DestinationCategoryTranslations[]> {
  return getItems<Item_DestinationCategoryTranslations>(
    baseUrl,
    'destination_category_translations',
    token,
    query,
  );
}

/**
 * Fetches a single item from the destination_category_translations collection
 */
export async function getOneDestinationCategoryTranslations(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_DestinationCategoryTranslations>,
): Promise<Item_DestinationCategoryTranslations> {
  return getItem<Item_DestinationCategoryTranslations>(
    baseUrl,
    'destination_category_translations',
    token,
    id,
    query,
  );
}
