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
export interface Item_ExperimentVariantFeatureFlag {
  experiment_variant_id?: string | null;
  feature_flag_id?: string | null;
  id?: number;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the experiment_variant_feature_flag collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getManyExperimentVariantFeatureFlag(
  baseUrl: string,
  token: string,
  query?: Query<Item_ExperimentVariantFeatureFlag>,
): Promise<Item_ExperimentVariantFeatureFlag[]> {
  return getItems<Item_ExperimentVariantFeatureFlag>(
    baseUrl,
    'experiment_variant_feature_flag',
    token,
    query,
  );
}

/**
 * Fetches a single item from the experiment_variant_feature_flag collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getOneExperimentVariantFeatureFlag(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_ExperimentVariantFeatureFlag>,
): Promise<Item_ExperimentVariantFeatureFlag> {
  return getItem<Item_ExperimentVariantFeatureFlag>(
    baseUrl,
    'experiment_variant_feature_flag',
    token,
    id,
    query,
  );
}
