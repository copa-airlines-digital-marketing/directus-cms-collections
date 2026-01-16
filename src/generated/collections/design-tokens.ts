/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: design_tokens
 */

export interface Item_DesignTokens {
  date_created?: string | null;
  date_updated?: string | null;
  name?: string;
  qa?: unknown;
  sample_color?: string | null;
  user_created?: string | null;
  user_updated?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the design_tokens collection
 */
export async function getManyDesignTokens(
  baseUrl: string,
  token: string,
  query?: Query<Item_DesignTokens>,
): Promise<Item_DesignTokens[]> {
  return getItems<Item_DesignTokens>(baseUrl, 'design_tokens', token, query);
}

/**
 * Fetches a single item from the design_tokens collection
 */
export async function getOneDesignTokens(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_DesignTokens>,
): Promise<Item_DesignTokens> {
  return getItem<Item_DesignTokens>(baseUrl, 'design_tokens', token, id, query);
}
