import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trainer-page',
  templateUrl: './trainer-page.component.html',
  styleUrls: ['./trainer-page.component.scss'],
})
export class TrainerPageComponent implements OnInit {
  trainerName: string = '';
  collectedPokemon: any[] = []; // You can define a Pokemon interface if needed

  constructor(private router: Router) {}

  ngOnInit() {
    // Check if the trainerName exists in local storage
    const storedName = localStorage.getItem('trainerName');
    this.trainerName = storedName !== null ? storedName : '';

    // Check if there are collected Pokémon in local storage
    const storedPokemon = localStorage.getItem('collectedPokemon');
    if (storedPokemon) {
      this.collectedPokemon = JSON.parse(storedPokemon);
    } else {
      this.collectedPokemon = [];
    }

    // Redirect to the Landing Page if the trainerName is not found
    if (!this.trainerName) {
      this.router.navigate(['/']);
    }
  }

  removePokemon(pokemon: any) {
    // Remove the Pokémon from the collection
    const index = this.collectedPokemon.indexOf(pokemon);
    if (index !== -1) {
      this.collectedPokemon.splice(index, 1);
      // Update the collection in local storage
      localStorage.setItem(
        'collectedPokemon',
        JSON.stringify(this.collectedPokemon)
      );
    }
  }
}
