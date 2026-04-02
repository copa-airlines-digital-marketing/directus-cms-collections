/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: stopover_restaurants
 */

import type { GeoJSON } from '../../client/types.js';

export interface Item_StopoverRestaurants {
  copa_only?: unknown;
  cuisines?: Record<string, unknown> | null;
  date_created?: string | null;
  date_published?: string | null;
  date_reviewed?: string | null;
  date_submitted?: string | null;
  date_updated?: string | null;
  duplicate: boolean;
  gallery: unknown;
  highlight?: boolean | null;
  id?: number;
  location: GeoJSON;
  main_image: string;
  meals: Record<string, unknown>;
  name?: string | null;
  'notice-58q3az'?: unknown;
  parent_content?: number | null;
  parent_page?: number | null;
  priority?: number | null;
  promo_code?: string | null;
  promo_discount_amount?: number | null;
  promo_discount_percent?: number | null;
  schedule?: Record<string, unknown> | null;
  status?: string;
  supported_languages?: Record<string, unknown> | null;
  translations: unknown;
  type: Record<string, unknown>;
  user_created?: string | null;
  user_updated?: string | null;
  whatsapp?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the stopover_restaurants collection
 */
export async function getManyStopoverRestaurants(
  baseUrl: string,
  token: string,
  query?: Query<Item_StopoverRestaurants>,
): Promise<Item_StopoverRestaurants[]> {
  return getItems<Item_StopoverRestaurants>(
    baseUrl,
    'stopover_restaurants',
    token,
    query,
  );
}

/**
 * Fetches a single item from the stopover_restaurants collection
 */
export async function getOneStopoverRestaurants(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_StopoverRestaurants>,
): Promise<Item_StopoverRestaurants> {
  return getItem<Item_StopoverRestaurants>(
    baseUrl,
    'stopover_restaurants',
    token,
    id,
    query,
  );
}
