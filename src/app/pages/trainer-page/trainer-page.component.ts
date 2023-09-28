import { Component, OnInit } from '@angular/core';
import { TrainerService } from '../../services/trainer.service';

@Component({
  selector: 'app-trainer-page',
  templateUrl: './trainer-page.component.html',
  styleUrls: ['./trainer-page.component.scss'],
})
export class TrainerPageComponent implements OnInit {
  trainerName: string = '';
  trainerPokemons: any[] = [];

  constructor(private TrainerService: TrainerService) {}

  ngOnInit() {
    // Fetch Trainers collected Pokemon
    this.TrainerService.getTrainerPokemons().subscribe(
      (data) => {
        this.trainerName = data.trainerName;
        this.trainerPokemons = data.pokemons;
      },
      (error) => {
        console.error('Error fetching Trainer data:', error);
      }
    );
  }
}
