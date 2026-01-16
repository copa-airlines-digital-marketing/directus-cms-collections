/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: feature_flag_audience
 */

export interface Item_FeatureFlagAudience {
  audience_id?: string | null;
  feature_flag_id?: string | null;
  id?: number;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the feature_flag_audience collection
 */
export async function getManyFeatureFlagAudience(
  baseUrl: string,
  token: string,
  query?: Query<Item_FeatureFlagAudience>,
): Promise<Item_FeatureFlagAudience[]> {
  return getItems<Item_FeatureFlagAudience>(
    baseUrl,
    'feature_flag_audience',
    token,
    query,
  );
}

/**
 * Fetches a single item from the feature_flag_audience collection
 */
export async function getOneFeatureFlagAudience(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_FeatureFlagAudience>,
): Promise<Item_FeatureFlagAudience> {
  return getItem<Item_FeatureFlagAudience>(
    baseUrl,
    'feature_flag_audience',
    token,
    id,
    query,
  );
}
