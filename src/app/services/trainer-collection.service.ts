import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Trainer } from '../models/trainer.model';
import { StorageUtil } from '../utils/storage.util';
import { StorageKeys } from '../enums/storage-keys.enum';
import { Pokemon } from '../models/pokemon.model';
import { TrainerService } from './trainer.service';
import { environment } from 'src/environments/environment';

const apiKey = environment.API_TRAINERS_KEY
const apiTrainersUrl = environment.apiTrainersUrl


@Injectable({
  providedIn: 'root'
})
export class TrainerCollectionService {

  constructor(
    private readonly trainerService: TrainerService) {}

  private trainer?: Trainer = this.trainerService.trainer

  public addToCollection(pokemon: Pokemon) {
    const newCollection: Pokemon[] = [...this.trainer!.pokemon, pokemon]
    return this.trainerService.updatePokemon(newCollection)
  }

  public inCollection(pokemon: Pokemon) {
    return this.trainer?.pokemon.find((pokemonInCollection: Pokemon) => pokemonInCollection === pokemon)
  }

  public removeFromCollection(pokemon: Pokemon): void {
    const newCollection = this.trainer?.pokemon.filter((pokemonInCollection: Pokemon) => pokemonInCollection !== pokemon)
    this.trainerService.updatePokemon(newCollection!)
  }
}
