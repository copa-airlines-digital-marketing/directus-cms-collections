import { Query, QueryItem, readItem, readItems } from '@directus/sdk';
import { StopoverPackage } from './stopover_package';
import { createDirectusClient, logAndReturn } from 'src/utils';
import { StopoverPackageFiles } from './stopover_package_files';
import { StopoverPackageTranslation } from './stopover_package_translations';

const getPackages = async (
  url: string,
  token: string,
  query?: Query<Schema, StopoverPackage>,
) => {
  const client = createDirectusClient(url, token);
  const items = await client
    .request(readItems('stopover_package', query))
    .catch(logAndReturn([<StopoverPackage>{}]));
  return items;
};

const getAPackage = async (
  url: string,
  token: string,
  id: string | number,
  query?: QueryItem<Schema, StopoverPackage>,
) => {
  const client = createDirectusClient(url, token);
  const items = await client
    .request(readItem('stopover_package', id, query))
    .catch(logAndReturn(<StopoverPackage>{}));
  return items;
};

export { getPackages, getAPackage };

export type {
  StopoverPackage,
  StopoverPackageFiles,
  StopoverPackageTranslation,
};
