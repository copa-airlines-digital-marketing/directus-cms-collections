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
export interface Item_Sections {
  background_color?: string | null;
  component?: string | null;
  content_horizontal_alignment?: string | null;
  content_horizontal_distribution?: string | null;
  content_spacing?: string;
  content_vertical_alignment?: string | null;
  content_vertical_distribution?: string | null;
  date_created?: string | null;
  date_updated?: string | null;
  horizontal_behaviour?: string | null;
  id?: number;
  landmark?: string | null;
  name?: string | null;
  page_storefronts?: unknown;
  section_content?: unknown;
  section_id?: string | null;
  status?: string;
  user_created?: string | null;
  user_updated?: string | null;
  vertical_spacing?: string;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the sections collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getManySections(
  baseUrl: string,
  token: string,
  query?: Query<Item_Sections>,
): Promise<Item_Sections[]> {
  return getItems<Item_Sections>(baseUrl, 'sections', token, query);
}

/**
 * Fetches a single item from the sections collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getOneSections(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_Sections>,
): Promise<Item_Sections> {
  return getItem<Item_Sections>(baseUrl, 'sections', token, id, query);
}
