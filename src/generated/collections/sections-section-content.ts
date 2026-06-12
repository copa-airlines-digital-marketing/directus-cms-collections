/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: sections_section_content
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
