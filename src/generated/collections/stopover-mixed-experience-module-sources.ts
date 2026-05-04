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

/**
 * @deprecated This collection no longer exists in Directus
 */
export interface Item_StopoverMixedExperienceModuleSources {
  entity_type: string;
  id?: number;
  max_items?: number;
  module_id?: string | null;
  status?: string;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the stopover_mixed_experience_module_sources collection
 */
/**
 * @deprecated This collection no longer exists in Directus
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
/**
 * @deprecated This collection no longer exists in Directus
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
