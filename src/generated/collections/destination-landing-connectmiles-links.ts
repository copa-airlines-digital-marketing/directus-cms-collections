/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: destination_landing_connectmiles_links
 */

export interface Item_DestinationLandingConnectmilesLinks {
  icon?: number | null;
  id?: number;
  name: string;
  open_in_new_tab?: boolean | null;
  sort?: number | null;
  status: string;
  translations?: unknown;
  url?: string | null;
  url_en?: string | null;
  url_es?: string | null;
  url_fr?: string | null;
  url_pt?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the destination_landing_connectmiles_links collection
 */
export async function getManyDestinationLandingConnectmilesLinks(
  baseUrl: string,
  token: string,
  query?: Query<Item_DestinationLandingConnectmilesLinks>,
): Promise<Item_DestinationLandingConnectmilesLinks[]> {
  return getItems<Item_DestinationLandingConnectmilesLinks>(
    baseUrl,
    'destination_landing_connectmiles_links',
    token,
    query,
  );
}

/**
 * Fetches a single item from the destination_landing_connectmiles_links collection
 */
export async function getOneDestinationLandingConnectmilesLinks(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_DestinationLandingConnectmilesLinks>,
): Promise<Item_DestinationLandingConnectmilesLinks> {
  return getItem<Item_DestinationLandingConnectmilesLinks>(
    baseUrl,
    'destination_landing_connectmiles_links',
    token,
    id,
    query,
  );
}
