/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * 
 * ⚠️ DEPRECATED COLLECTION ⚠️
 * This collection no longer exists in Directus.
 * Deprecated on: 2026-04-14
 * 
 * This file is kept for backward compatibility.
 * Please migrate away from this collection before it's removed.
 * To manually remove deprecated collections, run: pnpm clean:deprecated
 */

/**
 * @deprecated This collection no longer exists in Directus
 */
export interface Item_HotelAmenitiesTranslations {
  hotel_amenities_id?: number | null;
  id?: number;
  languages_code?: string | null;
  name: string;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the hotel_amenities_translations collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getManyHotelAmenitiesTranslations(
  baseUrl: string,
  token: string,
  query?: Query<Item_HotelAmenitiesTranslations>,
): Promise<Item_HotelAmenitiesTranslations[]> {
  return getItems<Item_HotelAmenitiesTranslations>(
    baseUrl,
    'hotel_amenities_translations',
    token,
    query,
  );
}

/**
 * Fetches a single item from the hotel_amenities_translations collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getOneHotelAmenitiesTranslations(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_HotelAmenitiesTranslations>,
): Promise<Item_HotelAmenitiesTranslations> {
  return getItem<Item_HotelAmenitiesTranslations>(
    baseUrl,
    'hotel_amenities_translations',
    token,
    id,
    query,
  );
}
