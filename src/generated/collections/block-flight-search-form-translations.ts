/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: block_flight_search_form_translations
 */

export interface Item_BlockFlightSearchFormTranslations {
  adult_singular_label?: string | null;
  adults_label?: string | null;
  block_flight_search_form_id?: string | null;
  business_label?: string | null;
  cabin_label?: string | null;
  child_singular_label?: string | null;
  children_label?: string | null;
  clear_selection_label?: string | null;
  close_label?: string | null;
  complete_dates_label?: string | null;
  cta_label?: string | null;
  decrease_adults_label?: string | null;
  decrease_children_label?: string | null;
  decrease_infants_label?: string | null;
  departure_date_label?: string | null;
  destination_label?: string | null;
  destination_placeholder?: string | null;
  disclaimer?: string | null;
  economy_label?: string | null;
  expanded_search_label?: string | null;
  external_new_tab_label?: string | null;
  eyebrow?: string | null;
  fallback_helper_text?: string | null;
  fallback_multicity_cta_label?: string | null;
  fallback_one_way_cta_label?: string | null;
  fallback_roundtrip_cta_label?: string | null;
  fallback_title?: string | null;
  id?: number;
  increase_adults_label?: string | null;
  increase_children_label?: string | null;
  increase_infants_label?: string | null;
  infant_adult_message?: string | null;
  infant_singular_label?: string | null;
  infants_label?: string | null;
  invalid_duration_message?: string | null;
  invalid_route_message?: string | null;
  itinerary_selector_label?: string | null;
  languages_code?: string | null;
  loading_message?: string | null;
  max_passengers_message_template?: string | null;
  minimum_destination_night_message?: string | null;
  multicity_label?: string | null;
  night_plural_label?: string | null;
  night_singular_label?: string | null;
  no_routes_found_message?: string | null;
  one_way_label?: string | null;
  origin_label?: string | null;
  origin_placeholder?: string | null;
  passenger_helper_text?: string | null;
  passenger_total_template?: string | null;
  passengers_label?: string | null;
  promo_code_label?: string | null;
  promo_code_placeholder?: string | null;
  required_field_message?: string | null;
  return_date_after_departure_message?: string | null;
  return_date_label?: string | null;
  roundtrip_label?: string | null;
  routes_unavailable_message?: string | null;
  select_destination_label?: string | null;
  select_origin_label?: string | null;
  select_return_date_label?: string | null;
  stopover_duration_label?: string | null;
  stopover_duration_max_label?: string | null;
  stopover_duration_min_label?: string | null;
  stopover_duration_placeholder?: string | null;
  stopover_helper_text?: string | null;
  stopover_outbound_label?: string | null;
  stopover_placement_label?: string | null;
  stopover_return_label?: string | null;
  stopover_segment_label?: string | null;
  stopover_toggle_label?: string | null;
  subtitle?: string | null;
  summary_arrival_label?: string | null;
  summary_arrive_after_stopover_label?: string | null;
  summary_continue_label?: string | null;
  summary_date_label?: string | null;
  summary_destination_days_template?: string | null;
  summary_outbound_flight_label?: string | null;
  summary_outbound_label?: string | null;
  summary_pending_dates_label?: string | null;
  summary_return_flight_label?: string | null;
  summary_return_label?: string | null;
  summary_return_starts_label?: string | null;
  summary_route_label?: string | null;
  summary_segment_label?: string | null;
  summary_select_date_label?: string | null;
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
