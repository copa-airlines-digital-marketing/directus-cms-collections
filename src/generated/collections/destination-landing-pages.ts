/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: destination_landing_pages
 */

export interface Item_DestinationLandingPages {
  airtrfx?: Record<string, unknown> | null;
  assets?: Record<string, unknown> | null;
  content?: Record<string, unknown> | null;
  iata_code: string;
  id?: number;
  media_assets?: unknown;
  notes?: string | null;
  schema_version?: number;
  sections?: unknown;
  seo?: Record<string, unknown> | null;
  slug: string;
  sort?: number | null;
  status?: string;
  template_version?: string;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the destination_landing_pages collection
 */
export async function getManyDestinationLandingPages(
  baseUrl: string,
  token: string,
  query?: Query<Item_DestinationLandingPages>,
): Promise<Item_DestinationLandingPages[]> {
  return getItems<Item_DestinationLandingPages>(
    baseUrl,
    'destination_landing_pages',
    token,
    query,
  );
}

/**
 * Fetches a single item from the destination_landing_pages collection
 */
export async function getOneDestinationLandingPages(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_DestinationLandingPages>,
): Promise<Item_DestinationLandingPages> {
  return getItem<Item_DestinationLandingPages>(
    baseUrl,
    'destination_landing_pages',
    token,
    id,
    query,
  );
}
