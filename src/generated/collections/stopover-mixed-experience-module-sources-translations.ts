/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: stopover_mixed_experience_module_sources_translations
 */

export interface Item_StopoverMixedExperienceModuleSourcesTranslations {
  id?: number;
  label?: string | null;
  languages_code?: string | null;
  stopover_mixed_experience_module_sources_id?: number | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the stopover_mixed_experience_module_sources_translations collection
 */
export async function getManyStopoverMixedExperienceModuleSourcesTranslations(
  baseUrl: string,
  token: string,
  query?: Query<Item_StopoverMixedExperienceModuleSourcesTranslations>,
): Promise<Item_StopoverMixedExperienceModuleSourcesTranslations[]> {
  return getItems<Item_StopoverMixedExperienceModuleSourcesTranslations>(
    baseUrl,
    'stopover_mixed_experience_module_sources_translations',
    token,
    query,
  );
}

/**
 * Fetches a single item from the stopover_mixed_experience_module_sources_translations collection
 */
export async function getOneStopoverMixedExperienceModuleSourcesTranslations(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_StopoverMixedExperienceModuleSourcesTranslations>,
): Promise<Item_StopoverMixedExperienceModuleSourcesTranslations> {
  return getItem<Item_StopoverMixedExperienceModuleSourcesTranslations>(
    baseUrl,
    'stopover_mixed_experience_module_sources_translations',
    token,
    id,
    query,
  );
}
