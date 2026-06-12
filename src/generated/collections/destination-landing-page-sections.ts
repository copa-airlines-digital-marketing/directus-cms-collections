/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: destination_landing_page_sections
 */

export interface Item_DestinationLandingPageSections {
  destination_landing_pages_id?: number | null;
  id?: number;
  sections_id?: number | null;
  sort?: number | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the destination_landing_page_sections collection
 */
export async function getManyDestinationLandingPageSections(
  baseUrl: string,
  token: string,
  query?: Query<Item_DestinationLandingPageSections>,
): Promise<Item_DestinationLandingPageSections[]> {
  return getItems<Item_DestinationLandingPageSections>(
    baseUrl,
    'destination_landing_page_sections',
    token,
    query,
  );
}

/**
 * Fetches a single item from the destination_landing_page_sections collection
 */
export async function getOneDestinationLandingPageSections(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_DestinationLandingPageSections>,
): Promise<Item_DestinationLandingPageSections> {
  return getItem<Item_DestinationLandingPageSections>(
    baseUrl,
    'destination_landing_page_sections',
    token,
    id,
    query,
  );
}
