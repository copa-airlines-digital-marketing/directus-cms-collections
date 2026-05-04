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
export interface Item_CategoriesDomain {
  date_created?: string | null;
  date_updated?: string | null;
  id?: number;
  key: string;
  name: string;
  record_info?: unknown;
  status: string;
  user_created?: string | null;
  user_updated?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the categories_domain collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getManyCategoriesDomain(
  baseUrl: string,
  token: string,
  query?: Query<Item_CategoriesDomain>,
): Promise<Item_CategoriesDomain[]> {
  return getItems<Item_CategoriesDomain>(
    baseUrl,
    'categories_domain',
    token,
    query,
  );
}

/**
 * Fetches a single item from the categories_domain collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getOneCategoriesDomain(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_CategoriesDomain>,
): Promise<Item_CategoriesDomain> {
  return getItem<Item_CategoriesDomain>(
    baseUrl,
    'categories_domain',
    token,
    id,
    query,
  );
}
