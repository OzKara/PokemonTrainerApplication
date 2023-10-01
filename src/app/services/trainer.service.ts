import { Injectable } from '@angular/core';
import { Trainer } from '../models/trainer.model';
import { StorageUtil } from '../utils/storage.util';
import { StorageKeys } from '../enums/storage-keys.enum';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TrainerService {
  private _trainer?: Trainer;

  get trainer(): Trainer | undefined {
    return this._trainer;
  }

  getTrainerByUsername(username: string): Observable<Trainer | null> {
    if (this._trainer) {
      return of(this._trainer);
    }
    return of(null);
  }

  set trainer(trainer: Trainer | undefined) {
    StorageUtil.saveStorage<Trainer>(StorageKeys.Trainer, trainer!);
    this._trainer = trainer;
  }

  constructor() {
    this._trainer = StorageUtil.readStorage<Trainer>(StorageKeys.Trainer);
  }
}
