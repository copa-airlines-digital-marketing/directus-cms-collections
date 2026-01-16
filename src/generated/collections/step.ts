/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: step
 */

export interface Item_Step {
  date_created?: string | null;
  date_updated?: string | null;
  icon?: number | null;
  id?: string;
  user_created?: string | null;
  user_updated?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the step collection
 */
export async function getManyStep(
  baseUrl: string,
  token: string,
  query?: Query<Item_Step>,
): Promise<Item_Step[]> {
  return getItems<Item_Step>(baseUrl, 'step', token, query);
}

/**
 * Fetches a single item from the step collection
 */
export async function getOneStep(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_Step>,
): Promise<Item_Step> {
  return getItem<Item_Step>(baseUrl, 'step', token, id, query);
}
