import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PokemonService } from '../../services/pokemon.service';
import { TrainerService } from '../../services/trainer.service';
import { Pokemon } from '../../models/pokemon.model';

@Component({
  selector: 'app-pokemon-catalogue-page',
  templateUrl: './pokemon-catalogue-page.component.html',
  styleUrls: ['./pokemon-catalogue-page.component.scss'],
})
export class PokemonCataloguePageComponent implements OnInit {
  pokemonList: Pokemon[] = [];

  constructor(
    private pokemonService: PokemonService,
    private trainerService: TrainerService
  ) {}

  ngOnInit(): void {
    // Fetch a list of Pokemon from your API or PokeAPI
    this.pokemonService.getPokemonList().subscribe(
      (data) => {
        this.pokemonList = data.results;
      },
      (error) => {
        console.error('Error fetching Pokémon data:', error);
      }
    );
  }

  addToCollection(pokemon: Pokemon): void {
    this.trainerService.addPokemonToCollection(pokemon);
  }

  getPokemonImageUrl(pokemonId: number): string {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
  }
}
