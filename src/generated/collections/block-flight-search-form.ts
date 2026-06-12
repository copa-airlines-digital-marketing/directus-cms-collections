/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: block_flight_search_form
 */

export interface Item_BlockFlightSearchForm {
  default_trip_type?: string | null;
  fallback_enabled?: boolean | null;
  fallback_multicity_url?: string | null;
  fallback_one_way_url?: string | null;
  fallback_roundtrip_url?: string | null;
  id?: string;
  key: string;
  layout_variant?: string | null;
  name?: string | null;
  shopping_base_url: string;
  shopping_miles_url: string;
  shopping_multicity_url: string;
  show_itinerary_summary?: boolean | null;
  show_passengers?: boolean | null;
  show_promo_code?: boolean | null;
  show_stopover_duration?: boolean | null;
  sort?: number | null;
  status?: string;
  stopover_enabled?: boolean | null;
  supported_trip_types?: Record<string, unknown> | null;
  theme?: string | null;
  translations?: unknown;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the block_flight_search_form collection
 */
export async function getManyBlockFlightSearchForm(
  baseUrl: string,
  token: string,
  query?: Query<Item_BlockFlightSearchForm>,
): Promise<Item_BlockFlightSearchForm[]> {
  return getItems<Item_BlockFlightSearchForm>(
    baseUrl,
    'block_flight_search_form',
    token,
    query,
  );
}

/**
 * Fetches a single item from the block_flight_search_form collection
 */
export async function getOneBlockFlightSearchForm(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_BlockFlightSearchForm>,
): Promise<Item_BlockFlightSearchForm> {
  return getItem<Item_BlockFlightSearchForm>(
    baseUrl,
    'block_flight_search_form',
    token,
    id,
    query,
  );
}
