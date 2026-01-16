/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: hotel_amenities
 */

export interface Item_HotelAmenities {
  date_created?: string | null;
  date_updated?: string | null;
  icon?: number | null;
  id?: number;
  name: string;
  translations: unknown;
  user_created?: string | null;
  user_updated?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the hotel_amenities collection
 */
export async function getManyHotelAmenities(
  baseUrl: string,
  token: string,
  query?: Query<Item_HotelAmenities>,
): Promise<Item_HotelAmenities[]> {
  return getItems<Item_HotelAmenities>(
    baseUrl,
    'hotel_amenities',
    token,
    query,
  );
}

/**
 * Fetches a single item from the hotel_amenities collection
 */
export async function getOneHotelAmenities(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_HotelAmenities>,
): Promise<Item_HotelAmenities> {
  return getItem<Item_HotelAmenities>(
    baseUrl,
    'hotel_amenities',
    token,
    id,
    query,
  );
}
