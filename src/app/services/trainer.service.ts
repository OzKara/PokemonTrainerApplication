import { Injectable } from '@angular/core';
import { Trainer } from '../models/trainer.model';
import { StorageUtil } from '../utils/storage.util';
import { StorageKeys } from '../enums/storage-keys.enum';
import { Pokemon } from '../models/pokemon.model';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const apiKey = environment.API_TRAINERS_KEY
const apiTrainersUrl = environment.apiTrainersUrl

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  private _trainer?: Trainer
  

  get trainer(): Trainer | undefined {
    return this._trainer
  }

  set trainer(trainer: Trainer | undefined) {
    StorageUtil.saveStorage<Trainer>(StorageKeys.Trainer, trainer!)
    this._trainer = trainer
  }

  public updatePokemon(pokemonCollection: Pokemon[]) {
  
    const headers = new HttpHeaders().set('x-api-key', apiKey)
    const url = (`${apiTrainersUrl}/${this.trainer?.id}`)
    this.trainer!.pokemon = pokemonCollection
    const body = {"pokemon": pokemonCollection}
    this.http.patch(url, 
      body
    , {headers}).subscribe((response) => {
      console.log("HELLO", response);
      })

    }

  constructor(
    private readonly http: HttpClient
  ) {
    this._trainer = StorageUtil.readStorage<Trainer>(StorageKeys.Trainer)
  }
}
