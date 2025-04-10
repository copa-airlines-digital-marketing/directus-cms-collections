import { StopoverTourFiles } from './stopover_tour_files';

const isStopoverTourFile = (value: unknown): value is StopoverTourFiles => {
  if (value == null || typeof value != 'object') {
    return false;
  }

  const propertiesSet = new Set([
    'id',
    'stopover_tour_id',
    'directus_files_id',
    'sort',
  ]);

  const valueAsMap = new Map(Object.entries(value));

  if (propertiesSet.isDisjointFrom(valueAsMap)) {
    return false;
  }

  if (
    propertiesSet.isSupersetOf(valueAsMap) &&
    valueAsMap.has('directus_files_id')
  ) {
    return true;
  }

  return false;
};

export { isStopoverTourFile };
