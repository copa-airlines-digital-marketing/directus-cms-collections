/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: destination_landing_week_day_translations
 */

export interface Item_DestinationLandingWeekDayTranslations {
  day_label?: string | null;
  description?: string | null;
  destination_landing_week_days_id?: number | null;
  id?: number;
  languages_code?: string | null;
  title?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the destination_landing_week_day_translations collection
 */
export async function getManyDestinationLandingWeekDayTranslations(
  baseUrl: string,
  token: string,
  query?: Query<Item_DestinationLandingWeekDayTranslations>,
): Promise<Item_DestinationLandingWeekDayTranslations[]> {
  return getItems<Item_DestinationLandingWeekDayTranslations>(
    baseUrl,
    'destination_landing_week_day_translations',
    token,
    query,
  );
}

/**
 * Fetches a single item from the destination_landing_week_day_translations collection
 */
export async function getOneDestinationLandingWeekDayTranslations(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_DestinationLandingWeekDayTranslations>,
): Promise<Item_DestinationLandingWeekDayTranslations> {
  return getItem<Item_DestinationLandingWeekDayTranslations>(
    baseUrl,
    'destination_landing_week_day_translations',
    token,
    id,
    query,
  );
}
