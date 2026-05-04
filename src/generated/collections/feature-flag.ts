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
export interface Item_FeatureFlag {
  audiences?: unknown;
  date_created?: string | null;
  date_updated?: string | null;
  default_value?: Record<string, unknown> | null;
  environments: unknown;
  id?: string;
  key: string;
  rollout_percentage?: number | null;
  status?: string;
  type: string;
  user_created?: string | null;
  user_updated?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the feature_flag collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getManyFeatureFlag(
  baseUrl: string,
  token: string,
  query?: Query<Item_FeatureFlag>,
): Promise<Item_FeatureFlag[]> {
  return getItems<Item_FeatureFlag>(baseUrl, 'feature_flag', token, query);
}

/**
 * Fetches a single item from the feature_flag collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getOneFeatureFlag(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_FeatureFlag>,
): Promise<Item_FeatureFlag> {
  return getItem<Item_FeatureFlag>(baseUrl, 'feature_flag', token, id, query);
}
