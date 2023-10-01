import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pokemon } from '../../models/pokemon.model';

@Component({
  selector: 'app-pokemon-catalog',
  templateUrl: './pokemon-catalogue.component.html',
  styleUrls: ['./pokemon-catalogue.component.css'],
})
export class PokemonCatalogComponent {
  @Input() pokemonList: Pokemon[] = [];
  @Input() isTrainerPage: boolean = false; // New input for Trainer Page
  @Output() addToCollectionClick: EventEmitter<Pokemon> =
    new EventEmitter<Pokemon>();
  @Output() releasePokemonClick: EventEmitter<Pokemon> =
    new EventEmitter<Pokemon>();

  // Emit the addToCollectionClick event with the selected Pokemon
  addToCollection(pokemon: Pokemon): void {
    this.addToCollectionClick.emit(pokemon);
  }
}
