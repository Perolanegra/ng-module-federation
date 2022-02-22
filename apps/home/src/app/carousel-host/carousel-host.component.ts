import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, ComponentRef } from '@angular/core';

@Component({
  selector: 'angular-space-carousel-host',
  templateUrl: './carousel-host.component.html',
  styleUrls: ['./carousel-host.component.scss']
})
export class CarouselHostComponent implements OnInit {

  constructor(private cfr: ComponentFactoryResolver, private vcref: ViewContainerRef) { }

  async ngOnInit() {
    const { PokemonCarouselComponent } = await loadRemoteModule({
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      type: 'module',
      exposedModule: './CarouselComponent'
    });
    const componentRef: ComponentRef<any> =
    this.vcref.createComponent(
      this.cfr.resolveComponentFactory(PokemonCarouselComponent)
    );

    componentRef.instance.search = 'novo texto';
  }

}
