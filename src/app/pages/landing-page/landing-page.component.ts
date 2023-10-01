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

  onSubmit() {
    if (this.trainerName.trim() !== '') {
      // Save the Trainer's name to local storage
      localStorage.setItem('trainerName', this.trainerName);

      // Use the TrainerService to save the Trainer data (optional)
      const trainer = { id: 1, username: this.trainerName, pokemon: [] };
      this.trainerService.saveTrainer(trainer);

      // Redirect to the Pokémon Catalogue Page
      this.router.navigate(['/pokemon-catalogue']);
    }
  }
}
