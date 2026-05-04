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
export interface Item_ExperimentAudience {
  audience_id?: string | null;
  experiment_id?: string | null;
  id?: number;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the experiment_audience collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getManyExperimentAudience(
  baseUrl: string,
  token: string,
  query?: Query<Item_ExperimentAudience>,
): Promise<Item_ExperimentAudience[]> {
  return getItems<Item_ExperimentAudience>(
    baseUrl,
    'experiment_audience',
    token,
    query,
  );
}

/**
 * Fetches a single item from the experiment_audience collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getOneExperimentAudience(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_ExperimentAudience>,
): Promise<Item_ExperimentAudience> {
  return getItem<Item_ExperimentAudience>(
    baseUrl,
    'experiment_audience',
    token,
    id,
    query,
  );
}
