/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: stopover_package_translations
 */

export interface Item_StopoverPackageTranslations {
  description: string;
  id?: number;
  included?: Record<string, unknown> | null;
  languages_code?: string | null;
  name: string;
  not_included?: Record<string, unknown> | null;
  path?: string | null;
  promo_description?: string | null;
  promo_name?: string | null;
  stopover_package_id?: number | null;
  url?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the stopover_package_translations collection
 */
export async function getManyStopoverPackageTranslations(
  baseUrl: string,
  token: string,
  query?: Query<Item_StopoverPackageTranslations>,
): Promise<Item_StopoverPackageTranslations[]> {
  return getItems<Item_StopoverPackageTranslations>(
    baseUrl,
    'stopover_package_translations',
    token,
    query,
  );
}

/**
 * Fetches a single item from the stopover_package_translations collection
 */
export async function getOneStopoverPackageTranslations(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_StopoverPackageTranslations>,
): Promise<Item_StopoverPackageTranslations> {
  return getItem<Item_StopoverPackageTranslations>(
    baseUrl,
    'stopover_package_translations',
    token,
    id,
    query,
  );
}
