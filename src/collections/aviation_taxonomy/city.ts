export interface MapPoint {
  lat: string;
  lng: string;
}
export interface City {
  iata_city_code: string;
  country: string;
  location: MapPoint;
  lat: number;
  lng: number;
  timezone: string;
}
export interface CityT {
  id: string;
  city: string;
  language: string;
  name: string;
  description?: string | null;
}
