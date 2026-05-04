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
export interface Item_StopoverPackage {
  children?: unknown;
  contact?: Record<string, unknown> | null;
  date_created?: string | null;
  date_published?: string | null;
  date_reviewed?: string | null;
  date_submitted?: string | null;
  date_updated?: string | null;
  duplicate: boolean;
  gallery: unknown;
  highlight?: boolean | null;
  id?: number;
  main_image: string;
  name: string;
  nights: number;
  parent_content?: number | null;
  parent_page?: number | null;
  priority?: number | null;
  promo_code?: string | null;
  promo_discount_amount?: number | null;
  promo_discount_percent?: number | null;
  status?: string;
  stay_region: Record<string, unknown>;
  supported_languages: Record<string, unknown>;
  translations: unknown;
  user_created?: string | null;
  user_updated?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the stopover_package collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getManyStopoverPackage(
  baseUrl: string,
  token: string,
  query?: Query<Item_StopoverPackage>,
): Promise<Item_StopoverPackage[]> {
  return getItems<Item_StopoverPackage>(
    baseUrl,
    'stopover_package',
    token,
    query,
  );
}

/**
 * Fetches a single item from the stopover_package collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getOneStopoverPackage(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_StopoverPackage>,
): Promise<Item_StopoverPackage> {
  return getItem<Item_StopoverPackage>(
    baseUrl,
    'stopover_package',
    token,
    id,
    query,
  );
}
