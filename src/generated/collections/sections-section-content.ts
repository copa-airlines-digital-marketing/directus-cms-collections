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
export interface Item_SectionsSectionContent {
  area?: string | null;
  collection?: string | null;
  component_name?: string | null;
  display?: string | null;
  horizontal_alignment?: string | null;
  id?: number;
  item?: string | null;
  order?: number | null;
  sections_id?: number | null;
  theme?: string | null;
  vertical_alignment?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the sections_section_content collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getManySectionsSectionContent(
  baseUrl: string,
  token: string,
  query?: Query<Item_SectionsSectionContent>,
): Promise<Item_SectionsSectionContent[]> {
  return getItems<Item_SectionsSectionContent>(
    baseUrl,
    'sections_section_content',
    token,
    query,
  );
}

/**
 * Fetches a single item from the sections_section_content collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getOneSectionsSectionContent(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_SectionsSectionContent>,
): Promise<Item_SectionsSectionContent> {
  return getItem<Item_SectionsSectionContent>(
    baseUrl,
    'sections_section_content',
    token,
    id,
    query,
  );
}
