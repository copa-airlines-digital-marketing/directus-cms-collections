/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: hero_badge
 */

export interface Item_HeroBadge {
  content?: unknown;
  date_created?: string | null;
  date_updated?: string | null;
  name?: string;
  qa?: unknown;
  style?: Record<string, unknown> | null;
  translations?: unknown;
  user_created?: string | null;
  user_updated?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the hero_badge collection
 */
export async function getManyHeroBadge(
  baseUrl: string,
  token: string,
  query?: Query<Item_HeroBadge>,
): Promise<Item_HeroBadge[]> {
  return getItems<Item_HeroBadge>(baseUrl, 'hero_badge', token, query);
}

/**
 * Fetches a single item from the hero_badge collection
 */
export async function getOneHeroBadge(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_HeroBadge>,
): Promise<Item_HeroBadge> {
  return getItem<Item_HeroBadge>(baseUrl, 'hero_badge', token, id, query);
}
