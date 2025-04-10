import type { StopoverTour } from './stopover_tours/stopover_tours';

type StopoverTourFiles = {
  id: number;
  stopover_tour_id: number | StopoverTour;
  directus_files_id: string; // Link to images but is not necesary as we are using Directus
  sort: null | number;
};
