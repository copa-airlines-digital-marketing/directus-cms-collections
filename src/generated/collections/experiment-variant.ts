/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: experiment_variant
 */

export interface Item_ExperimentVariant {
  date_created?: string | null;
  date_updated?: string | null;
  experiment: string;
  feature_flags?: unknown;
  id?: string;
  key: string;
  name: string;
  user_created?: string | null;
  user_updated?: string | null;
  weight: number;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the experiment_variant collection
 */
export async function getManyExperimentVariant(
  baseUrl: string,
  token: string,
  query?: Query<Item_ExperimentVariant>,
): Promise<Item_ExperimentVariant[]> {
  return getItems<Item_ExperimentVariant>(
    baseUrl,
    'experiment_variant',
    token,
    query,
  );
}

/**
 * Fetches a single item from the experiment_variant collection
 */
export async function getOneExperimentVariant(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_ExperimentVariant>,
): Promise<Item_ExperimentVariant> {
  return getItem<Item_ExperimentVariant>(
    baseUrl,
    'experiment_variant',
    token,
    id,
    query,
  );
}
