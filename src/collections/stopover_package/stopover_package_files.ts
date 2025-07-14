import { StopoverPackage } from './stopover_package';

type StopoverPackageFiles = {
  id: number;
  stopover_package_id: number | StopoverPackage;
  directus_files_id: string;
  sort: number;
};

export type { StopoverPackageFiles };
