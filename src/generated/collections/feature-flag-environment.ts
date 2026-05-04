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
export interface Item_FeatureFlagEnvironment {
  environment_key?: string | null;
  feature_flag_id?: string | null;
  id?: number;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the feature_flag_environment collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getManyFeatureFlagEnvironment(
  baseUrl: string,
  token: string,
  query?: Query<Item_FeatureFlagEnvironment>,
): Promise<Item_FeatureFlagEnvironment[]> {
  return getItems<Item_FeatureFlagEnvironment>(
    baseUrl,
    'feature_flag_environment',
    token,
    query,
  );
}

/**
 * Fetches a single item from the feature_flag_environment collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getOneFeatureFlagEnvironment(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_FeatureFlagEnvironment>,
): Promise<Item_FeatureFlagEnvironment> {
  return getItem<Item_FeatureFlagEnvironment>(
    baseUrl,
    'feature_flag_environment',
    token,
    id,
    query,
  );
}
