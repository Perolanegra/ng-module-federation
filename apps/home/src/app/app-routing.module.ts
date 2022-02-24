import { CarouselHostComponent } from './carousel-host/carousel-host.component';
import { loadRemoteModule } from "@angular-architects/module-federation";
import { Inject, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { APP_ROUTES } from "./app.routes";
import { MFE_TOKEN } from "./mfe.token";
import { Microfrontend } from "./mfes/mfe";
import { WatcherService } from "./mfes/watcher.service";

const route_FINAL = await buildRoutes();
@NgModule({
  imports: [RouterModule.forRoot(route_FINAL, { onSameUrlNavigation: "reload" })],
  exports: [RouterModule],
})
export class AppRoutingModule {

  // static forRoot(conf?: AppConfig): ModuleWithProviders {
  //   return {
  //     ngModule: SharedModule,
  //     providers: [{ provide: APP_CONFIG, useValue: conf }, CounterService]
  //   }
  // }

  // static forRoot(conf?: AppConfig): ModuleWithProviders {
  //   return {
  //     ngModule: SharedModule,
  //     providers: [{ provide: APP_CONFIG, useValue: conf }, CounterService]
  //   }
  // }

}

async function buildRoutes(): Promise<any> {
  const mfes: Microfrontend[] = await new WatcherService().retrieveMfes();

  const lazyRoutes: Routes = mfes.map(o => {
    return ({
      path: o.routePath,
      loadChildren: () => loadRemoteModule({
        type: o.type,
        remoteEntry: o.remoteEntry,
        exposedModule: o.exposedModule,
      }).then(m => m[o.ngModuleName])
    })
  });
  return [...APP_ROUTES, ...lazyRoutes]
}
