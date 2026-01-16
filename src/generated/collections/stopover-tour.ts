/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: stopover_tour
 */

import type { GeoJSON } from '../../client/types.js';

export interface Item_StopoverTour {
  category?: Record<string, unknown> | null;
  children?: unknown;
  date_created?: string | null;
  date_updated?: string | null;
  duplicate: boolean;
  duration: number;
  end_point?: GeoJSON | null;
  gallery: unknown;
  highlight?: boolean | null;
  id?: number;
  main_image: string;
  meeting_point?: GeoJSON | null;
  name: string;
  operator?: number | null;
  parent_content?: number | null;
  parent_page?: number | null;
  pilar?: Record<string, unknown> | null;
  priority?: number | null;
  promo_code?: string | null;
  promo_discount_amount?: number | null;
  promo_discount_percent?: number | null;
  start_time?: string | null;
  status?: string;
  supported_languages?: Record<string, unknown> | null;
  translations: unknown;
  user_created?: string | null;
  user_updated?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the stopover_tour collection
 */
export async function getManyStopoverTour(
  baseUrl: string,
  token: string,
  query?: Query<Item_StopoverTour>,
): Promise<Item_StopoverTour[]> {
  return getItems<Item_StopoverTour>(baseUrl, 'stopover_tour', token, query);
}

/**
 * Fetches a single item from the stopover_tour collection
 */
export async function getOneStopoverTour(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_StopoverTour>,
): Promise<Item_StopoverTour> {
  return getItem<Item_StopoverTour>(baseUrl, 'stopover_tour', token, id, query);
}
