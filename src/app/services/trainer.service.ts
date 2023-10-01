import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Trainer } from '../models/trainer.model';
import { StorageUtil } from '../utils/storage.util';

@Injectable({
  providedIn: 'root',
})
export class TrainerService {
  private apiUrl = environment.apiUrl;
  private apiKey = environment.apiKey;

  constructor(private http: HttpClient) {}

  getTrainer(id: number): Observable<Trainer> {
    const url = `${this.apiUrl}/${id}`;
    const headers = new HttpHeaders().set('x-api-key', this.apiKey);

    return this.http.get<Trainer>(url, { headers });
  }

  saveTrainer(trainer: Trainer): void {
    const url = `${this.apiUrl}/${trainer.id}`;
    const headers = new HttpHeaders().set('x-api-key', this.apiKey);

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
}
