import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pokemon-catalogue-page',
  templateUrl: './pokemon-catalogue-page.component.html',
  styleUrls: ['./pokemon-catalogue-page.component.scss'],
})
export class PokemonCataloguePageComponent implements OnInit {
  pokemonList: any[] = []; // You can define a Pokemon interface if needed

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() {
    // Check if the trainerName exists in local storage
    const trainerName = localStorage.getItem('trainerName');
    if (!trainerName) {
      this.router.navigate(['/']);
    }

    // Fetch Pokémon data from the PokeAPI (example using HttpClient)
    this.http.get<any>('https://pokeapi.co/api/v2/pokemon?limit=20').subscribe(
      (response) => {
        this.pokemonList = response.results.map((pokemon: any) => ({
          name: pokemon.name,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url
            .split('/')
            .slice(-2, -1)}.png`,
          details: null, // You can fetch details on-demand
        }));
      },
      (error) => {
        console.error('Failed to fetch Pokémon data', error);
      }
    );
  }

  collectPokemon(pokemon: any) {
    // Implement collecting Pokemon and updating Trainer API here
    // You can use the same approach as in the Trainer Page
  }

  showDetails(pokemon: any) {
    // Implement showing additional details (if needed) here
    // You can fetch details from the PokeAPI on-demand
  }
}
