export interface SiteLocale {
  id: string;
  site: string; // Site.id
  language: string; // Language.code
  currency: string; // Currency.code
  market_code: string; // 'GS' | 'US' | 'BR'...
  is_default: boolean;
}
