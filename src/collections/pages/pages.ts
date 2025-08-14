// pending other properties
export type Page = {
  id: number;
  storefronts: number[] | PagesStorefronts[];
  translations: number[] | PagesTranslations[];
};
