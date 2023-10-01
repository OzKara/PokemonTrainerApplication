import { Component, OnInit } from '@angular/core';
import { Trainer } from '../../models/trainer.model';
import { TrainerService } from '../../services/trainer.service';

@Component({
  selector: 'app-trainer-page',
  templateUrl: './trainer-page.component.html',
  styleUrls: ['./trainer-page.component.scss'],
})
export class TrainerPageComponent implements OnInit {
  showButton: boolean = false;
  trainerName: string = '';
  trainer: Trainer | null = null; // Initialize to an empty object

  constructor(private trainerService: TrainerService) {}

  ngOnInit(): void {
    // Get Trainer's name from local storage
    const storedName = localStorage.getItem('trainerName');

    // Check for null before assignment
    if (storedName !== null) {
      this.trainerName = storedName;
    }

    // Retrieve trainer data from the TrainerService
    this.trainer = this.trainerService.trainer || null;
  }
}
