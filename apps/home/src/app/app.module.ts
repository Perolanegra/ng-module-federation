import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { CarouselHostComponent } from './carousel-host/carousel-host.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, CarouselHostComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // RouterModule.forRoot(APP_ROUTES, { onSameUrlNavigation: "reload" })
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
