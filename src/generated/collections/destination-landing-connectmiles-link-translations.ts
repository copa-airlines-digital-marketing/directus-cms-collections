/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: destination_landing_connectmiles_link_translations
 */

export interface Item_DestinationLandingConnectmilesLinkTranslations {
  description?: string | null;
  destination_landing_connectmiles_links_id?: number | null;
  id?: number;
  label?: string | null;
  languages_code?: string | null;
  title?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the destination_landing_connectmiles_link_translations collection
 */
export async function getManyDestinationLandingConnectmilesLinkTranslations(
  baseUrl: string,
  token: string,
  query?: Query<Item_DestinationLandingConnectmilesLinkTranslations>,
): Promise<Item_DestinationLandingConnectmilesLinkTranslations[]> {
  return getItems<Item_DestinationLandingConnectmilesLinkTranslations>(
    baseUrl,
    'destination_landing_connectmiles_link_translations',
    token,
    query,
  );
}

/**
 * Fetches a single item from the destination_landing_connectmiles_link_translations collection
 */
export async function getOneDestinationLandingConnectmilesLinkTranslations(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_DestinationLandingConnectmilesLinkTranslations>,
): Promise<Item_DestinationLandingConnectmilesLinkTranslations> {
  return getItem<Item_DestinationLandingConnectmilesLinkTranslations>(
    baseUrl,
    'destination_landing_connectmiles_link_translations',
    token,
    id,
    query,
  );
}
