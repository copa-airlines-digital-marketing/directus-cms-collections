/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: feature_flag_environment
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
