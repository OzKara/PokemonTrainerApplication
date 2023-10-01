// src/app/pages/trainer-page/trainer-page.component.ts

import { Component, OnInit } from '@angular/core';
import { Trainer } from '../../models/trainer.model';
import { TrainerService } from '../../services/trainer.service';

@Component({
  selector: 'app-trainer-page',
  templateUrl: './trainer-page.component.html',
  styleUrls: ['./trainer-page.component.scss'],
})
export class TrainerPageComponent implements OnInit {
  trainerName: string = '';
  trainer: Trainer | null = null; // Initialize to an empty object

  constructor(private trainerService: TrainerService) {}

  ngOnInit(): void {
    // Get Trainer's name from local storage
    const storedName =
      localStorage.getItem('trainerName') ||
      sessionStorage.getItem('trainerName');
      

    // Check for null before assignment
    if (storedName !== null) {
      this.trainerName = storedName;
    }

  //   // Fetch Trainer data
  //   this.trainerService.getTrainer(1).subscribe(
  //     (data) => {
  //       // Check for null before assignment
  //       if (data !== null) {
  //         this.trainer = data;
  //       }
  //     },
  //     (error) => {
  //       console.error('Error fetching Trainer data:', error);
  //     }
  //   );
  // }

  // releasePokemon(pokemonName: string): void {
  //   if (!this.trainer) {
  //     return;
  //   }

  //   const index = this.trainer.pokemon.findIndex(
  //     (pokemon) => pokemon.name === pokemonName
  //   );
  //   if (index !== -1) {
  //     this.trainer.pokemon.splice(index, 1);

  //     this.trainerService.saveTrainer(this.trainer);
  //   }
  // }
  }}
