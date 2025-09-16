export type TagCategory = 'theme' | 'interest' | 'season';
export interface Tag {
  id: string;
  key: string;
  category: TagCategory;
}
export interface TagT {
  id: string;
  tag: string;
  language: string;
  label: string;
}
