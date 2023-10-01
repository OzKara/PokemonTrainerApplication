import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPage } from './pages/login/login.page';
import { PokemonPage } from './pages/pokemon/pokemon.page';
import { TrainerPageComponent } from './pages/trainer-page/trainer-page.component';
import { PokemonCataloguePageComponent } from './pages/pokemon-catalogue-page/pokemon-catalogue-page.component';
import { TrainerGuard } from './guards/trainer.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/login"
  },
  {
    path: "login",
    component: LoginPage,
  },
  {
    path: "pokemon",
    component: PokemonPage,
    canActivate: [ AuthGuard ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
