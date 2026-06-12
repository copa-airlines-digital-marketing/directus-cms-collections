/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: stopover_mixed_experience_module
 */

export interface Item_StopoverMixedExperienceModule {
  date_created?: string | null;
  date_updated?: string | null;
  filter_category_enabled?: boolean;
  filter_discount_enabled?: boolean;
  filter_distance_enabled?: boolean;
  filter_duration_enabled?: boolean;
  filter_language_enabled?: boolean;
  key: string;
  max_items?: number;
  prefilter?: string;
  sort?: number | null;
  sources: unknown;
  translations: unknown;
  user_created?: string | null;
  user_updated?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the stopover_mixed_experience_module collection
 */
export async function getManyStopoverMixedExperienceModule(
  baseUrl: string,
  token: string,
  query?: Query<Item_StopoverMixedExperienceModule>,
): Promise<Item_StopoverMixedExperienceModule[]> {
  return getItems<Item_StopoverMixedExperienceModule>(
    baseUrl,
    'stopover_mixed_experience_module',
    token,
    query,
  );
}

/**
 * Fetches a single item from the stopover_mixed_experience_module collection
 */
export async function getOneStopoverMixedExperienceModule(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_StopoverMixedExperienceModule>,
): Promise<Item_StopoverMixedExperienceModule> {
  return getItem<Item_StopoverMixedExperienceModule>(
    baseUrl,
    'stopover_mixed_experience_module',
    token,
    id,
    query,
  );
}
