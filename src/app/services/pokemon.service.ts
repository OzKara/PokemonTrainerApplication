import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2'; // You can replace with your actual PokeAPI URL

  constructor(private http: HttpClient) {}

  // Fetch a list of Pokémon from PokeAPI
  getPokemonList(): Observable<any> {
    const url = `${this.apiUrl}/pokemon?limit=10`; // Example: Limiting to 10 Pokemon
    return this.http.get(url);
  }
}
