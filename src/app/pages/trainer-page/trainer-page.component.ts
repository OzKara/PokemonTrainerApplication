import { Component, OnInit } from '@angular/core';
import { Trainer } from '../../models/trainer.model';
import { TrainerService } from '../../services/trainer.service';
import { Pokemon } from '../../models/pokemon.model';
import { StorageUtil } from '../../utils/storage.util';
import { StorageKeys } from '../../enums/storage-keys.enum';
import { TrainerCollectionService } from 'src/app/services/trainer-collection.service';
@Component({
  selector: 'app-trainer-page',
  templateUrl: './trainer-page.component.html',
  styleUrls: ['./trainer-page.component.scss'],
})
export class TrainerPageComponent implements OnInit {
  showButton: boolean = false;
  isTrainerPage: boolean = true;
  trainerName: string = '';
  trainer: Trainer | null = null; // Initialize to an empty object
  ownedPokemons: Pokemon[] = [];

  constructor(private trainerService: TrainerService,
              private trainerCollectionService: TrainerCollectionService) {}

  ngOnInit(): void {
    // Get Trainer's name from local storage
  
    this.trainerName = StorageUtil.readStorage<Trainer>(StorageKeys.Trainer)?.username!

    // Retrieve trainer data from the TrainerService
    this.trainer = this.trainerService.trainer || null;
    console.log(1)
    this.trainerService.getTrainerByUsername(this.trainerName).subscribe(
      (data) => {
        if (data !== null) {
          this.trainer = data;
          // Prepare the ownedPokemons array with names, image URLs, and IDs
          this.ownedPokemons = this.trainer.pokemon.map(
            (ownedPokemon, index) => ({
              id: index + 1,
              name: ownedPokemon.name,
              image: ownedPokemon.image,
            })
          );
        }
      },
      (error) => {
        console.error('Error fetching Trainer data:', error);
      }
    );
  }

  releasePokemon(pokemon: Pokemon): void {
    this.trainerCollectionService.removeFromCollection(pokemon)
  }
}
