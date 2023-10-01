import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import FormsModule
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPage } from './pages/login/login.page';
import { PokemonPage } from './pages/pokemon/pokemon.page';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginService } from './services/login.service';
import { TrainerPageComponent } from './pages/trainer-page/trainer-page.component';
import { PokemonCataloguePageComponent } from './pages/pokemon-catalogue-page/pokemon-catalogue-page.component';
import { TrainerService } from './services/trainer.service';
import { PokemonService } from './services/pokemon.service';
import { TrainerCollectionService } from './services/trainer-collection.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginPage,
    LoginFormComponent,
    PokemonPage,
    TrainerPageComponent,
    PokemonCataloguePageComponent,
    // Add other components here
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [LoginService, TrainerService, PokemonService, TrainerCollectionService],
  bootstrap: [AppComponent],
})
export class AppModule {}
