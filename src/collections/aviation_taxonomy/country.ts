export interface Country {
  iso2: string;
  iso3: string;
  continent: string;
  currency: string;
  timezone_primary: string;
  visa_info_url?: string | null;
}
export interface CountryT {
  id: string;
  country: string;
  language: string;
  name: string;
}
