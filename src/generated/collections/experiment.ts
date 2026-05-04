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
export interface Item_Experiment {
  date_created?: string | null;
  date_updated?: string | null;
  end_at?: string | null;
  experiment_variant?: unknown;
  id?: string;
  key: string;
  name: string;
  notes?: string | null;
  primary_metric?: string | null;
  seed: string;
  site: string;
  start_at?: string | null;
  status: string;
  target_audiences?: unknown;
  unit: string;
  user_created?: string | null;
  user_updated?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the experiment collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getManyExperiment(
  baseUrl: string,
  token: string,
  query?: Query<Item_Experiment>,
): Promise<Item_Experiment[]> {
  return getItems<Item_Experiment>(baseUrl, 'experiment', token, query);
}

/**
 * Fetches a single item from the experiment collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getOneExperiment(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_Experiment>,
): Promise<Item_Experiment> {
  return getItem<Item_Experiment>(baseUrl, 'experiment', token, id, query);
}
