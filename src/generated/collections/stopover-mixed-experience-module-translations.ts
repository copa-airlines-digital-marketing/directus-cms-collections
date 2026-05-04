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
export interface Item_StopoverMixedExperienceModuleTranslations {
  description?: Record<string, unknown> | null;
  disclaimer_text?: Record<string, unknown> | null;
  id?: number;
  languages_code?: string | null;
  primary_cta?: unknown;
  primary_cta_label?: string | null;
  primary_cta_url?: string | null;
  secondary_cta?: unknown;
  secondary_cta_label?: string | null;
  secondary_cta_url?: string | null;
  stopover_mixed_experience_module_key?: string | null;
  title: string;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the stopover_mixed_experience_module_translations collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getManyStopoverMixedExperienceModuleTranslations(
  baseUrl: string,
  token: string,
  query?: Query<Item_StopoverMixedExperienceModuleTranslations>,
): Promise<Item_StopoverMixedExperienceModuleTranslations[]> {
  return getItems<Item_StopoverMixedExperienceModuleTranslations>(
    baseUrl,
    'stopover_mixed_experience_module_translations',
    token,
    query,
  );
}

/**
 * Fetches a single item from the stopover_mixed_experience_module_translations collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getOneStopoverMixedExperienceModuleTranslations(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_StopoverMixedExperienceModuleTranslations>,
): Promise<Item_StopoverMixedExperienceModuleTranslations> {
  return getItem<Item_StopoverMixedExperienceModuleTranslations>(
    baseUrl,
    'stopover_mixed_experience_module_translations',
    token,
    id,
    query,
  );
}
