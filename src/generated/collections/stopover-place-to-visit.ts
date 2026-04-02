/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: stopover_place_to_visit
 */

import type { GeoJSON } from '../../client/types.js';

export interface Item_StopoverPlaceToVisit {
  category?: Record<string, unknown> | null;
  copa_only?: unknown;
  date_created?: string | null;
  date_published?: string | null;
  date_reviewed?: string | null;
  date_submitted?: string | null;
  date_updated?: string | null;
  duration: string;
  experience_category?: number | null;
  experiences?: unknown;
  gallery?: unknown;
  highlight?: boolean | null;
  id?: number;
  location: GeoJSON;
  main_image?: string | null;
  name: string;
  'notice-ftwdmf'?: unknown;
  parent_content?: number | null;
  parent_page?: number | null;
  pilar: string;
  priority?: number | null;
  promo_code?: string | null;
  promo_discount_amount?: number | null;
  promo_discount_percent?: number | null;
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
 * Fetches multiple items from the stopover_place_to_visit collection
 */
export async function getManyStopoverPlaceToVisit(
  baseUrl: string,
  token: string,
  query?: Query<Item_StopoverPlaceToVisit>,
): Promise<Item_StopoverPlaceToVisit[]> {
  return getItems<Item_StopoverPlaceToVisit>(
    baseUrl,
    'stopover_place_to_visit',
    token,
    query,
  );
}

/**
 * Fetches a single item from the stopover_place_to_visit collection
 */
export async function getOneStopoverPlaceToVisit(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_StopoverPlaceToVisit>,
): Promise<Item_StopoverPlaceToVisit> {
  return getItem<Item_StopoverPlaceToVisit>(
    baseUrl,
    'stopover_place_to_visit',
    token,
    id,
    query,
  );
}
