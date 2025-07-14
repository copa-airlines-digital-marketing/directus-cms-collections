type TextContentImage = {
  id: number;
  directus_files_id: string;
};

type TextContentTranslations = {
  id: number;
  languages_code: string | Languages;
  name: string;
  title: string;
  description: string;
};

type TextContent = {
  id: number;
  name: string;
  icon: string;
  image: string | TextContentImage;
  translations: number[] | TextContentTranslations[];
};

export type { TextContent, TextContentTranslations };
