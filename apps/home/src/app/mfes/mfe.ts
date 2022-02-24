import { LoadRemoteModuleEsmOptions } from "@angular-architects/module-federation";

export type Microfrontend = LoadRemoteModuleEsmOptions & {
  displayName: string;
  routePath: string;
  ngModuleName: string;
};
