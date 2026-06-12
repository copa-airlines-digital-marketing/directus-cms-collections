/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: block_flight_search_form_translations
 */

export interface Item_BlockFlightSearchFormTranslations {
  block_flight_search_form_id?: string | null;
  cta_label?: string | null;
  departure_date_label?: string | null;
  destination_label?: string | null;
  destination_placeholder?: string | null;
  disclaimer?: string | null;
  eyebrow?: string | null;
  fallback_helper_text?: string | null;
  fallback_multicity_cta_label?: string | null;
  fallback_one_way_cta_label?: string | null;
  fallback_roundtrip_cta_label?: string | null;
  fallback_title?: string | null;
  id?: number;
  invalid_duration_message?: string | null;
  invalid_route_message?: string | null;
  languages_code?: string | null;
  loading_message?: string | null;
  multicity_label?: string | null;
  one_way_label?: string | null;
  origin_label?: string | null;
  origin_placeholder?: string | null;
  passengers_label?: string | null;
  promo_code_label?: string | null;
  promo_code_placeholder?: string | null;
  required_field_message?: string | null;
  return_date_label?: string | null;
  roundtrip_label?: string | null;
  stopover_duration_label?: string | null;
  stopover_duration_placeholder?: string | null;
  stopover_helper_text?: string | null;
  stopover_outbound_label?: string | null;
  stopover_placement_label?: string | null;
  stopover_return_label?: string | null;
  stopover_segment_label?: string | null;
  stopover_toggle_label?: string | null;
  subtitle?: string | null;
  summary_continue_label?: string | null;
  summary_date_label?: string | null;
  summary_outbound_label?: string | null;
  summary_return_label?: string | null;
  summary_segment_label?: string | null;
  summary_stopover_label?: string | null;
  summary_title?: string | null;
  title?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the block_flight_search_form_translations collection
 */
export async function getManyBlockFlightSearchFormTranslations(
  baseUrl: string,
  token: string,
  query?: Query<Item_BlockFlightSearchFormTranslations>,
): Promise<Item_BlockFlightSearchFormTranslations[]> {
  return getItems<Item_BlockFlightSearchFormTranslations>(
    baseUrl,
    'block_flight_search_form_translations',
    token,
    query,
  );
}

/**
 * Fetches a single item from the block_flight_search_form_translations collection
 */
export async function getOneBlockFlightSearchFormTranslations(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_BlockFlightSearchFormTranslations>,
): Promise<Item_BlockFlightSearchFormTranslations> {
  return getItem<Item_BlockFlightSearchFormTranslations>(
    baseUrl,
    'block_flight_search_form_translations',
    token,
    id,
    query,
  );
}
