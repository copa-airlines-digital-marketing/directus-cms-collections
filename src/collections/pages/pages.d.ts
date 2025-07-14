// pending other properties
type Page = {
  id: number;
  storefronts: number[] | PagesStorefronts[];
  translations: number[] | PagesTranslations[];
};
