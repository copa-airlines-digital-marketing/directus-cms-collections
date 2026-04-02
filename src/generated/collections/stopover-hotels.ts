/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: stopover_hotels
 */

import type { GeoJSON } from '../../client/types.js';

export interface Item_StopoverHotels {
  booking_email: string;
  children?: unknown;
  copa_only?: unknown;
  date_created?: string | null;
  date_published?: string | null;
  date_reviewed?: string | null;
  date_submitted?: string | null;
  date_updated?: string | null;
  gallery: unknown;
  highlight?: boolean | null;
  id?: number;
  includes: Record<string, unknown>;
  location: GeoJSON;
  main_image: string;
  name?: string | null;
  parent_content?: number | null;
  parent_page?: number | null;
  phone_number?: string | null;
  priority?: number | null;
  promo_code?: string | null;
  promo_discount_amount?: number | null;
  promo_discount_percent?: number | null;
  stars: number;
  status?: string;
  supported_languages?: Record<string, unknown> | null;
  translations: unknown;
  use_name?: boolean;
  user_created?: string | null;
  user_updated?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the stopover_hotels collection
 */
export async function getManyStopoverHotels(
  baseUrl: string,
  token: string,
  query?: Query<Item_StopoverHotels>,
): Promise<Item_StopoverHotels[]> {
  return getItems<Item_StopoverHotels>(
    baseUrl,
    'stopover_hotels',
    token,
    query,
  );
}

/**
 * Fetches a single item from the stopover_hotels collection
 */
export async function getOneStopoverHotels(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_StopoverHotels>,
): Promise<Item_StopoverHotels> {
  return getItem<Item_StopoverHotels>(
    baseUrl,
    'stopover_hotels',
    token,
    id,
    query,
  );
}
