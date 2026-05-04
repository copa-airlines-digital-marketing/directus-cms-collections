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
/**
 * @deprecated This collection no longer exists in Directus
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
/**
 * @deprecated This collection no longer exists in Directus
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
