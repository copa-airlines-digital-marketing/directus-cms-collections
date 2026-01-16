/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: pages
 */

export interface Item_Pages {
  advanced_settings?: unknown;
  associated_articles?: unknown;
  date_created?: string | null;
  date_updated?: string | null;
  end_date?: string | null;
  end_of_body_code?: string | null;
  head_code?: string | null;
  id?: number;
  index?: boolean | null;
  name?: string | null;
  page_structure?: unknown;
  parent?: number | null;
  seo?: unknown;
  settings?: unknown;
  share_image?: string | null;
  site?: number | null;
  start_date?: string | null;
  start_of_body_code?: string | null;
  status: string;
  stopover_package?: unknown;
  stopover_place_to_visit?: unknown;
  stopover_restaurants?: unknown;
  stopover_tour?: unknown;
  stopover_tour_operator?: unknown;
  stopover_transportation?: unknown;
  storefronts?: unknown;
  translations: unknown;
  user_created?: string | null;
  user_updated?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the pages collection
 */
export async function getManyPages(
  baseUrl: string,
  token: string,
  query?: Query<Item_Pages>,
): Promise<Item_Pages[]> {
  return getItems<Item_Pages>(baseUrl, 'pages', token, query);
}

/**
 * Fetches a single item from the pages collection
 */
export async function getOnePages(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_Pages>,
): Promise<Item_Pages> {
  return getItem<Item_Pages>(baseUrl, 'pages', token, id, query);
}
