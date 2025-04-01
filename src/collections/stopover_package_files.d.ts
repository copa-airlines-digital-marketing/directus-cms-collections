type StopoverPackageFile = {
  id: number;
  stopover_package_id: number | StopoverPackage;
  directus_files_id: string; // Link to images but is not necesary as we are using Directus
  sort: null | number;
};
