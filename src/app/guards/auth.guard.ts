import { ActivatedRouteSnapshot, CanActivate, Router, RouterState, RouterStateSnapshot, UrlTree } from '@angular/router';
import { TrainerService } from '../services/trainer.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {

  constructor(
    private readonly router: Router,
    private readonly trainerService: TrainerService
  ) {}
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (this.trainerService.trainer) {
      return true
    }
    this.router.navigateByUrl("/")
    return false
  }
}