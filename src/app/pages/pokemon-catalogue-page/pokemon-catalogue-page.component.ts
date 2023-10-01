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
  showButton: boolean = true;
  pokemonList: Pokemon[] = [];

  constructor(
    private pokemonService: PokemonService,
    private trainerService: TrainerService
  ) {}

  ngOnInit(): void {
    // Fetch a list of Pokemon from your API or PokeAPI
    this.pokemonService.getPokemonList().subscribe(
      (data) => {
        // Extract the Pokemon IDs and names
        this.pokemonList = data.results.map((pokemon: any) => ({
          id: this.extractPokemonIdFromUrl(pokemon.url),
          name: pokemon.name,
          image: this.getPokemonImageUrl(
            this.extractPokemonIdFromUrl(pokemon.url)
          ),
        }));
      },
      (error) => {
        console.error('Error fetching Pokemon data:', error);
      }
    );
  }

  private extractPokemonIdFromUrl(url: string): number {
    const parts = url.split('/');
    return parseInt(parts[parts.length - 2], 10);
  }

  addToCollection(pokemon: Pokemon): void {
    // Implement your logic for adding Pokemon to the collection here
    console.log(`Added ${pokemon.name} to collection.`);
  }

  getPokemonImageUrl(pokemonId: number): string {
    console.log(pokemonId);
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
  }
}
