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
export interface Item_StopoverTourTranslations {
  description?: string | null;
  experience?: Record<string, unknown> | null;
  id?: number;
  included?: Record<string, unknown> | null;
  languages_code?: string | null;
  name: string;
  not_included?: Record<string, unknown> | null;
  path?: string | null;
  promo_description?: string | null;
  promo_name?: string | null;
  stopover_tour_id?: number | null;
  url?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the stopover_tour_translations collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getManyStopoverTourTranslations(
  baseUrl: string,
  token: string,
  query?: Query<Item_StopoverTourTranslations>,
): Promise<Item_StopoverTourTranslations[]> {
  return getItems<Item_StopoverTourTranslations>(
    baseUrl,
    'stopover_tour_translations',
    token,
    query,
  );
}

/**
 * Fetches a single item from the stopover_tour_translations collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getOneStopoverTourTranslations(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_StopoverTourTranslations>,
): Promise<Item_StopoverTourTranslations> {
  return getItem<Item_StopoverTourTranslations>(
    baseUrl,
    'stopover_tour_translations',
    token,
    id,
    query,
  );
}
