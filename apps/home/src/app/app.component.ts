import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, ComponentFactoryResolver, ComponentRef, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'angular-space-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'home';

  constructor(private vcref: ViewContainerRef, private cfr: ComponentFactoryResolver) {

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
