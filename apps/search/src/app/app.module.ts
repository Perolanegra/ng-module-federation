import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { PokemonCarouselComponent } from './pokemon-carousel/pokemon-carousel.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, PokemonCarouselComponent],
  imports: [BrowserModule, AppRoutingModule],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
