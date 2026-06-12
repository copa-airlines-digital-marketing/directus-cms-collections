/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: destination_landing_week_days
 */

export interface Item_DestinationLandingWeekDays {
  day_number?: number | null;
  icon?: number | null;
  id?: number;
  name: string;
  sort?: number | null;
  status: string;
  translations?: unknown;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the destination_landing_week_days collection
 */
export async function getManyDestinationLandingWeekDays(
  baseUrl: string,
  token: string,
  query?: Query<Item_DestinationLandingWeekDays>,
): Promise<Item_DestinationLandingWeekDays[]> {
  return getItems<Item_DestinationLandingWeekDays>(
    baseUrl,
    'destination_landing_week_days',
    token,
    query,
  );
}

/**
 * Fetches a single item from the destination_landing_week_days collection
 */
export async function getOneDestinationLandingWeekDays(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_DestinationLandingWeekDays>,
): Promise<Item_DestinationLandingWeekDays> {
  return getItem<Item_DestinationLandingWeekDays>(
    baseUrl,
    'destination_landing_week_days',
    token,
    id,
    query,
  );
}
