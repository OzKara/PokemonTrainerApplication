import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class TrainerGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const trainerName =
      localStorage.getItem('trainerName') ||
      sessionStorage.getItem('trainerName');

    if (trainerName) {
      return true;
    } else {
      // Redirect to the landing page if not authenticated
      this.router.navigate(['/']);
      return false;
    }
  }
}
