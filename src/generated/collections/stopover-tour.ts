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

import type { GeoJSON } from '../../client/types.js';

/**
 * @deprecated This collection no longer exists in Directus
 */
export interface Item_StopoverTour {
  category?: Record<string, unknown>;
  children?: unknown;
  date_created?: string | null;
  date_published?: string | null;
  date_reviewed?: string | null;
  date_submitted?: string | null;
  date_updated?: string | null;
  duplicate: boolean;
  duration: number;
  end_point?: GeoJSON | null;
  experience_category?: number | null;
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
/**
 * @deprecated This collection no longer exists in Directus
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
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getOneStopoverTour(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_StopoverTour>,
): Promise<Item_StopoverTour> {
  return getItem<Item_StopoverTour>(baseUrl, 'stopover_tour', token, id, query);
}
