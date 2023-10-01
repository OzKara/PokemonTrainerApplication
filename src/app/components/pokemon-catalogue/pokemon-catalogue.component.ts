import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pokemon } from '../../models/pokemon.model';
import { TrainerService } from 'src/app/services/trainer.service';
import { TrainerCollectionService } from 'src/app/services/trainer-collection.service';

@Component({
  selector: 'app-pokemon-catalog',
  templateUrl: './pokemon-catalogue.component.html',
  styleUrls: ['./pokemon-catalogue.component.css'],
})
export class PokemonCatalogComponent {

  constructor(private trainerCollectionService: TrainerCollectionService, private trainerService: TrainerService) {}
  @Input() pokemonList: Pokemon[] = [];
  @Input() isTrainerPage: boolean = false; // New input for Trainer Page
  @Output() addToCollectionClick: EventEmitter<Pokemon> =
    new EventEmitter<Pokemon>();
  @Output() releasePokemonClick: EventEmitter<Pokemon> =
    new EventEmitter<Pokemon>();


  currentTrainer() {
    console.log(this.trainerService.trainer?.pokemon)
    return this.trainerService.trainer?.pokemon
  }

  isInCollection(pokemon: Pokemon): boolean | undefined  {
    console.log(pokemon)
    return this.trainerCollectionService.inCollection(pokemon)
  }

  // Emit the addToCollectionClick event with the selected Pokemon
  addToCollection(pokemon: Pokemon): void {
    this.addToCollectionClick.emit(pokemon);
  }
}
