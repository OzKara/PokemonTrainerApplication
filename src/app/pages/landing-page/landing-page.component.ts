import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TrainerService } from '../../services/trainer.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent {
  trainerName: string = '';

  constructor(private router: Router, private trainerService: TrainerService) {}

  createTrainer(): void {
    // Check if the trainer with the same username already exists
    this.trainerService.getTrainerByUsername(this.trainerName).subscribe(
      (existingTrainer) => {
        if (existingTrainer) {
          console.log(
            'Trainer with this username already exists:',
            existingTrainer
          );
        } else {
          const newTrainer = {
            username: this.trainerName,
          };

          // Make a POST request to create the new trainer
          this.trainerService.createTrainer(newTrainer.username).subscribe(
            (response) => {
              // Successfully created the trainer
              console.log('Trainer created:', response);
            },
            (error) => {
              console.error('Error creating trainer:', error);
            }
          );
        }
      },
      (error) => {
        console.error('Error checking username availability:', error);
      }
    );
  }
}
