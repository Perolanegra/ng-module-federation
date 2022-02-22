import { Component } from '@angular/core';

@Component({
  selector: 'angular-space-pokemon-carousel',
  templateUrl: './pokemon-carousel.component.html',
  styleUrls: ['./pokemon-carousel.component.scss']
})
export class PokemonCarouselComponent {

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() { }

  search = 'texto que vai ser mudado com a manipulação do host';

}
