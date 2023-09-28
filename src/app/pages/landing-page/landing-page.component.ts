import { Component } from '@angular/core';
import { TrainerService } from '../../services/trainer.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent {
  trainerName: string = '';

  constructor(private TrainerService: TrainerService) {}

  saveTrainerName() {
    if (this.trainerName.trim() !== '') {
      this.TrainerService.saveTrainerName(this.trainerName).subscribe(
        (response) => {
          // Successfully saved Trainer name
          // Redirect to Trainer page (navigate to the Trainer page)
          // You may need to import Router from '@angular/router' and inject it in the constructor.
          // this.router.navigate(['/trainer']);
        },
        (error) => {
          console.error('Error saving Trainer name:', error);
          alert('Failed to save Trainer name. Please try again.');
        }
      );
    } else {
      alert('Please enter your Trainer name.');
    }
  }
}
