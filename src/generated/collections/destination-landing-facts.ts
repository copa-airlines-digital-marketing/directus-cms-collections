/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: destination_landing_facts
 */

export interface Item_DestinationLandingFacts {
  icon?: number | null;
  id?: number;
  is_featured?: boolean | null;
  name: string;
  sort?: number | null;
  status: string;
  translations?: unknown;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the destination_landing_facts collection
 */
export async function getManyDestinationLandingFacts(
  baseUrl: string,
  token: string,
  query?: Query<Item_DestinationLandingFacts>,
): Promise<Item_DestinationLandingFacts[]> {
  return getItems<Item_DestinationLandingFacts>(
    baseUrl,
    'destination_landing_facts',
    token,
    query,
  );
}

/**
 * Fetches a single item from the destination_landing_facts collection
 */
export async function getOneDestinationLandingFacts(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_DestinationLandingFacts>,
): Promise<Item_DestinationLandingFacts> {
  return getItem<Item_DestinationLandingFacts>(
    baseUrl,
    'destination_landing_facts',
    token,
    id,
    query,
  );
}
