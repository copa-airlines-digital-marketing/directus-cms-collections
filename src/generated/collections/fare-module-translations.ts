/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: fare_module_translations
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
