import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PokemonCarouselComponent } from "./pokemon-carousel/pokemon-carousel.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "pokemon" },
  {
    path: 'pokemon',
    component: PokemonCarouselComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
