import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private apiUrl = environment.pokeApiUrl;

  constructor(private http: HttpClient) {}

  getPokemonList(limit: number): Observable<any> {
    const url = `${this.apiUrl}/pokemon?limit=${limit}`;
    return this.http.get(url);
  }

  getPokemonDetails(url: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(url);
  }
}
