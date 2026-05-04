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
export interface Item_CategoryScopes {
  category: number;
  category_entity: string;
  date_created?: string | null;
  date_updated?: string | null;
  entity_type?: Record<string, unknown> | null;
  id?: number;
  notes?: string | null;
  status: string;
  user_created?: string | null;
  user_updated?: string | null;
  valid_from?: string | null;
  valid_to?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the category_scopes collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getManyCategoryScopes(
  baseUrl: string,
  token: string,
  query?: Query<Item_CategoryScopes>,
): Promise<Item_CategoryScopes[]> {
  return getItems<Item_CategoryScopes>(
    baseUrl,
    'category_scopes',
    token,
    query,
  );
}

/**
 * Fetches a single item from the category_scopes collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getOneCategoryScopes(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_CategoryScopes>,
): Promise<Item_CategoryScopes> {
  return getItem<Item_CategoryScopes>(
    baseUrl,
    'category_scopes',
    token,
    id,
    query,
  );
}
