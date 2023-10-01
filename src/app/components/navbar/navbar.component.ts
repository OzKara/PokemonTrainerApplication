import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavBarComponent {
  @Input() showButton: boolean = true;

  constructor(private router: Router) {}

  get isCataloguePage(): boolean {
    return this.router.url === '/pokemon-catalogue';
  }

  get isTrainerPage(): boolean {
    return this.router.url === '/trainer';
  }

  goToCataloguePage(): void {
    this.router.navigate(['/pokemon-catalogue']);
  }

  goToTrainerPage(): void {
    this.router.navigate(['/trainer']);
  }
}
