/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: domain
 */

export interface Item_Domain {
  date_created?: string | null;
  date_updated?: string | null;
  environment: string;
  hostname: string;
  id?: string;
  is_canonical?: boolean;
  site: string;
  user_created?: string | null;
  user_updated?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the domain collection
 */
export async function getManyDomain(
  baseUrl: string,
  token: string,
  query?: Query<Item_Domain>,
): Promise<Item_Domain[]> {
  return getItems<Item_Domain>(baseUrl, 'domain', token, query);
}

/**
 * Fetches a single item from the domain collection
 */
export async function getOneDomain(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_Domain>,
): Promise<Item_Domain> {
  return getItem<Item_Domain>(baseUrl, 'domain', token, id, query);
}
