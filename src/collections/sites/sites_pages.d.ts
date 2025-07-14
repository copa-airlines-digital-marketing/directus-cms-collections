type SitesPages = {
  id: number;
  sites_id: number | unknown; //pending site definition
  pages_id: number | Page;
  page_type: 'home' | 'content' | 'error';
};
