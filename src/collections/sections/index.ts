import { Query, readItems } from '@directus/sdk';
import { logAndReturn, createDirectusClient } from '../../utils';
import { TextContent } from '../text_content';

type Spacing =
  | 'none'
  | 'minimal'
  | 'tiny'
  | 'petit'
  | 'normal'
  | 'roomy'
  | 'spacious'
  | 'big'
  | 'huge';

type SectionContent = {
  collection: 'Text_Content';
  order: number;
  component_name: string | null;
  area: string | null;
  display: '100' | '75' | '70' | '50' | '25';
  theme: 'light' | 'dark';
  horizontal_alignment: 'left' | 'center' | 'right';
  vertical_alignment:
    | 'top'
    | 'center'
    | 'bottom'
    | 'baseline'
    | 'stretch'
    | null;
  item: TextContent;
};

type Section = {
  id: number;
  name: string[];
  status: 'published' | 'draft' | 'archived';
  section_id: number;
  landmark:
    | 'aside'
    | 'footer'
    | 'header'
    | 'hero'
    | 'loading'
    | 'modal'
    | 'regular'
    | 'section';
  background_color: string | null;
  vertical_spacing: Spacing;
  horizontal_behaviour: 'full' | 'contained' | 'container-grid' | null;
  content_spacing: Spacing;
  content_horizontal_alignment: 'left' | 'center' | 'right' | null;
  content_horizontal_distribution:
    | 'left'
    | 'center'
    | 'right'
    | 'space_around'
    | 'space_between'
    | 'space_evenly'
    | 'stretch'
    | null;
  content_vertical_alignment:
    | 'top'
    | 'center'
    | 'bottom'
    | 'baseline'
    | 'stretch'
    | null;
  content_vertical_distribution:
    | 'top'
    | 'center'
    | 'bottom'
    | 'space_around'
    | 'space_between'
    | 'space_evenly'
    | 'stretch'
    | 'baseline'
    | null;
  component:
    | 'accordion'
    | 'accordion-tabs'
    | 'footer-primary'
    | 'header-primary'
    | 'hero-primary'
    | 'tabs'
    | 'image-content-section'
    | 'best-of-grid'
    | null;
  section_content: number[] | SectionContent[];
  page_storefronts: number[] | PagesStorefronts[];
};

const getASection = async <T>(
  url: string,
  token: string,
  query?: Query<Schema, Sections>,
) => {
  const client = createDirectusClient(url, token);
  const items = await client
    .request(readItems('sections', query))
    .catch(logAndReturn([<Sections>{}]));
  return items as T;
};

const getSections = async <T>(
  url: string,
  token: string,
  query?: Query<Schema, Sections>,
) => {
  const client = createDirectusClient(url, token);
  const items = await client
    .request(readItems('sections', query))
    .catch(logAndReturn([<Sections>{}]));
  return items as T;
};
export type { Section, SectionContent };
export { getASection, getSections };
