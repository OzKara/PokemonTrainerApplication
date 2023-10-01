import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { TrainerPageComponent } from './pages/trainer-page/trainer-page.component';
import { PokemonCataloguePageComponent } from './pages/pokemon-catalogue-page/pokemon-catalogue-page.component';
import { TrainerGuard } from './guards/trainer.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  {
    path: 'trainer',
    component: TrainerPageComponent,
    canActivate: [AuthGuard, TrainerGuard],
  },
  {
    path: 'pokemon-catalogue',
    component: PokemonCataloguePageComponent,
    canActivate: [AuthGuard],
  },
  // Add routes for other pages here
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
