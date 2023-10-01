import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Trainer } from '../models/trainer.model';
import { StorageUtil } from '../utils/storage.util';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

const apiUrl = 'https://branch-amplified-hydrofoil.glitch.me';
const apiKey =
  'lbmbNy6GTatA9coD8jFejJ6pJK8Hv7YWEBw3X81n3I2b60ol65ukT3WyS2uE2Z6u';
console.log(apiUrl);
console.log(apiKey);

@Injectable({
  providedIn: 'root',
})
export class TrainerService {
  constructor(private http: HttpClient) {}

  getTrainer(id: number): Observable<Trainer> {
    const url = `${apiUrl}/${id}`;
    const headers = new HttpHeaders().set('x-api-key', apiKey);

    return this.http.get<Trainer>(url, { headers });
  }

  saveTrainer(trainer: Trainer): void {
    const url = `${apiUrl}/${trainer.id}`;
    const headers = new HttpHeaders().set('x-api-key', apiKey);

    this.http.put(url, trainer, { headers }).subscribe(
      () => {
        // Successfully saved, update local storage if needed
        StorageUtil.writeToLocalStorage('trainer', trainer);
      },
      (error) => {
        console.error('Failed to save Trainer', error);
      }
    );
  }

  addPokemonToCollection(pokemon: any): Observable<any> {
    const url = `${apiUrl}/add-pokemon-to-collection`;
    const headers = new HttpHeaders().set('x-api-key', apiKey);

    return this.http.post(url, { pokemon }, { headers });
  }

  createTrainer(username: string): Observable<Trainer> {
    const url = `${apiUrl}/trainers`; // Assuming you have an endpoint for creating trainers
    const headers = new HttpHeaders().set('x-api-key', apiKey);

    // Create a new trainer with the given username
    const newTrainer: Trainer = {
      id: 0, // Assign 0 or null for the ID since the API will generate it
      username: username,
      pokemon: [],
    };
    return this.http.post<Trainer>(url, newTrainer, { headers });
  }

  getTrainerByUsername(username: string): Observable<Trainer | null> {
    const url = `${apiUrl}/trainers?username=${username}`;
    const headers = new HttpHeaders().set('x-api-key', apiKey);

    return this.http.get<Trainer[]>(url, { headers }).pipe(
      map((trainers) => (trainers.length > 0 ? trainers[0] : null)),
      catchError((error) => {
        console.error('Error checking username availability:', error);
        return of(null);
      })
    );
  }
}
