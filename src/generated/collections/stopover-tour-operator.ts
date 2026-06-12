/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: stopover_tour_operator
 */

export interface Item_StopoverTourOperator {
  children?: unknown;
  contact?: Record<string, unknown> | null;
  date_created?: string | null;
  date_published?: string | null;
  date_reviewed?: string | null;
  date_submitted?: string | null;
  date_updated?: string | null;
  duplicate: boolean;
  highlight?: boolean | null;
  id?: number;
  main_image?: string | null;
  name: string;
  network?: Record<string, unknown> | null;
  parent_content?: number | null;
  parent_page?: number | null;
  priority?: number | null;
  status?: string;
  stopover_tours?: unknown;
  user_created?: string | null;
  user_updated?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the stopover_tour_operator collection
 */
export async function getManyStopoverTourOperator(
  baseUrl: string,
  token: string,
  query?: Query<Item_StopoverTourOperator>,
): Promise<Item_StopoverTourOperator[]> {
  return getItems<Item_StopoverTourOperator>(
    baseUrl,
    'stopover_tour_operator',
    token,
    query,
  );
}

/**
 * Fetches a single item from the stopover_tour_operator collection
 */
export async function getOneStopoverTourOperator(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_StopoverTourOperator>,
): Promise<Item_StopoverTourOperator> {
  return getItem<Item_StopoverTourOperator>(
    baseUrl,
    'stopover_tour_operator',
    token,
    id,
    query,
  );
}
