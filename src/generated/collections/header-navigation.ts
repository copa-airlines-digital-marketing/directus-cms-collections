/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: header_navigation
 */

export interface Item_HeaderNavigation {
  component?: string | null;
  header_id?: number | null;
  id?: number;
  navigation_id?: string | null;
  sort?: number | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the header_navigation collection
 */
export async function getManyHeaderNavigation(
  baseUrl: string,
  token: string,
  query?: Query<Item_HeaderNavigation>,
): Promise<Item_HeaderNavigation[]> {
  return getItems<Item_HeaderNavigation>(
    baseUrl,
    'header_navigation',
    token,
    query,
  );
}

/**
 * Fetches a single item from the header_navigation collection
 */
export async function getOneHeaderNavigation(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_HeaderNavigation>,
): Promise<Item_HeaderNavigation> {
  return getItem<Item_HeaderNavigation>(
    baseUrl,
    'header_navigation',
    token,
    id,
    query,
  );
}
