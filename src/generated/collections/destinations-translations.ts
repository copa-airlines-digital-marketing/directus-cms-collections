/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: destinations_translations
 */

export interface Item_DestinationsTranslations {
  airport_name?: string | null;
  airtrfx_uri?: string | null;
  destinations_iata_code?: string | null;
  id?: number;
  languages_code?: string | null;
  name?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the destinations_translations collection
 */
export async function getManyDestinationsTranslations(
  baseUrl: string,
  token: string,
  query?: Query<Item_DestinationsTranslations>,
): Promise<Item_DestinationsTranslations[]> {
  return getItems<Item_DestinationsTranslations>(
    baseUrl,
    'destinations_translations',
    token,
    query,
  );
}

/**
 * Fetches a single item from the destinations_translations collection
 */
export async function getOneDestinationsTranslations(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_DestinationsTranslations>,
): Promise<Item_DestinationsTranslations> {
  return getItem<Item_DestinationsTranslations>(
    baseUrl,
    'destinations_translations',
    token,
    id,
    query,
  );
}
