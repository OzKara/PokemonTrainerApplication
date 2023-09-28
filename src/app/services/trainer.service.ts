import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TrainerService {
  private baseUrl = environment.apiUrl;
  private apiKey = environment.apiKey;

  constructor(private http: HttpClient) {}

  // Method to save Trainer name to the Trainer API
  saveTrainerName(trainerName: string): Observable<any> {
    const headers = new HttpHeaders().set('X-API-KEY', this.apiKey);
    return this.http.post(
      `${this.baseUrl}/trainer`,
      { trainerName },
      { headers }
    );
  }

  // Method to fetch Trainer collected Pokémon
  getTrainerPokemons(): Observable<any> {
    const headers = new HttpHeaders().set('X-API-KEY', this.apiKey);
    return this.http.get(`${this.baseUrl}/trainer/pokemons`, { headers });
  }
}
