export interface Route {
  id: string;
  origin: string; // Airport.iata
  destination: string; // Airport.iata
  active: boolean;
  season_start?: string | null;
  season_end?: string | null;
  flight_time_min?: number | null;
  aircraft_types?: string[]; // opc
}
export interface RouteT {
  id: string;
  route: string;
  language: string;
  headline?: string | null;
  teaser?: string | null;
  hero_image?: string | null;
  body?: string | null;
}
