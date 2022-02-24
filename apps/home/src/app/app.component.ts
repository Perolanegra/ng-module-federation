import { Component, ComponentFactoryResolver, ComponentRef, ViewContainerRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Microfrontend } from './mfes/mfe';
import { WatcherService } from './mfes/watcher.service';

@Component({
  selector: 'angular-space-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  mfes: Microfrontend[] = [];

  constructor(
    private router: Router,
    private watcher: WatcherService,
    private vcref: ViewContainerRef,
    private cfr: ComponentFactoryResolver) {

  }

   // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
   ngOnInit(): void {
    // this.mfes = await this.watcher.retrieveMfes();
    // const routes = buildRoutes(this.mfes);
  }

  // async ngOnInit() {
  //   const { AppComponent } = await loadRemoteModule({
  //     remoteEntry: 'http://localhost:4201/remoteEntry.js',
  //     remoteName: 'search',
  //     exposedModule: './AppComponent'
  //   });

  //   const componentRef: ComponentRef<any> = this.vcref.createComponent(
  //     this.cfr.resolveComponentFactory(AppComponent)
  //   );

  //   componentRef.instance.search = 'p';
  // }
}
