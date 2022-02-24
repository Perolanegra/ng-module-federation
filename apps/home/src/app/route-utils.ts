import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { Microfrontend } from './mfes/mfe';

export function buildRoutes(options: Microfrontend[]): Routes {

  const lazyRoutes: Routes = options.map(o =>  {
   return  ({
      path: o.routePath,
      loadChildren: () => loadRemoteModule({
        type: o.type,
        remoteEntry: o.remoteEntry,
        exposedModule: o.exposedModule,
      }).then(m => m[o.ngModuleName])
    })
  });

  return [...APP_ROUTES, ...lazyRoutes];
}
