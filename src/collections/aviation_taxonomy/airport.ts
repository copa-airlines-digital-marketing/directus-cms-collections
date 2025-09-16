import { Status } from '../sitles_locales/site';
import { MapPoint } from './city';

export interface Airport {
  iata: string;
  icao?: string | null;
  city: string;
  location: MapPoint;
  lat: number;
  lng: number;
  elevation_ft?: number | null;
  timezone: string;
  is_hub: boolean;
  status: Status;
}
export interface AirportT {
  id: string;
  airport: string;
  language: string;
  name: string;
  alt_names?: string | null;
  about?: string | null;
}
