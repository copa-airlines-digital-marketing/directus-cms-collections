/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: stopover_mixed_experience_module_sources
 */

export interface Item_StopoverMixedExperienceModuleSources {
  entity_type: string;
  id?: number;
  max_items?: number;
  module_id?: string | null;
  status?: string;
  translations: unknown;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the stopover_mixed_experience_module_sources collection
 */
export async function getManyStopoverMixedExperienceModuleSources(
  baseUrl: string,
  token: string,
  query?: Query<Item_StopoverMixedExperienceModuleSources>,
): Promise<Item_StopoverMixedExperienceModuleSources[]> {
  return getItems<Item_StopoverMixedExperienceModuleSources>(
    baseUrl,
    'stopover_mixed_experience_module_sources',
    token,
    query,
  );
}

/**
 * Fetches a single item from the stopover_mixed_experience_module_sources collection
 */
export async function getOneStopoverMixedExperienceModuleSources(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_StopoverMixedExperienceModuleSources>,
): Promise<Item_StopoverMixedExperienceModuleSources> {
  return getItem<Item_StopoverMixedExperienceModuleSources>(
    baseUrl,
    'stopover_mixed_experience_module_sources',
    token,
    id,
    query,
  );
}
