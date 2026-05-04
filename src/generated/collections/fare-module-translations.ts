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
export interface Item_FareModuleTranslations {
  fare_module_id?: string | null;
  id?: number;
  labels?: Record<string, unknown> | null;
  languages_code?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the fare_module_translations collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getManyFareModuleTranslations(
  baseUrl: string,
  token: string,
  query?: Query<Item_FareModuleTranslations>,
): Promise<Item_FareModuleTranslations[]> {
  return getItems<Item_FareModuleTranslations>(
    baseUrl,
    'fare_module_translations',
    token,
    query,
  );
}

/**
 * Fetches a single item from the fare_module_translations collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getOneFareModuleTranslations(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_FareModuleTranslations>,
): Promise<Item_FareModuleTranslations> {
  return getItem<Item_FareModuleTranslations>(
    baseUrl,
    'fare_module_translations',
    token,
    id,
    query,
  );
}
