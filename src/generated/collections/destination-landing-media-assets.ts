/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: destination_landing_media_assets
 */

export interface Item_DestinationLandingMediaAssets {
  context?: string | null;
  destination_landing_pages_id?: number | null;
  file?: string | null;
  filename_download?: string | null;
  getty_id: string;
  id?: number;
  image_reference?: string | null;
  module_collection?: string | null;
  module_item?: string | null;
  notes?: string | null;
  occurrences?: Record<string, unknown> | null;
  role_key: string;
  section_key?: string | null;
  sort?: number | null;
  source_folder?: string | null;
  source_provider?: string | null;
  status?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the destination_landing_media_assets collection
 */
export async function getManyDestinationLandingMediaAssets(
  baseUrl: string,
  token: string,
  query?: Query<Item_DestinationLandingMediaAssets>,
): Promise<Item_DestinationLandingMediaAssets[]> {
  return getItems<Item_DestinationLandingMediaAssets>(
    baseUrl,
    'destination_landing_media_assets',
    token,
    query,
  );
}

/**
 * Fetches a single item from the destination_landing_media_assets collection
 */
export async function getOneDestinationLandingMediaAssets(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_DestinationLandingMediaAssets>,
): Promise<Item_DestinationLandingMediaAssets> {
  return getItem<Item_DestinationLandingMediaAssets>(
    baseUrl,
    'destination_landing_media_assets',
    token,
    id,
    query,
  );
}
