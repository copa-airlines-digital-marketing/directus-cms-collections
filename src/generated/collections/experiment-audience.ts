/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: experiment_audience
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
