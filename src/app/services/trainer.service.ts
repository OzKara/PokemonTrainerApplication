import { Injectable } from '@angular/core';
import { Trainer } from '../models/trainer.model';
import { StorageUtil } from '../utils/storage.util';
import { StorageKeys } from '../enums/storage-keys.enum';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  private _trainer?: Trainer

  get trainer(): Trainer | undefined {
    return this._trainer
  }

  set trainer(trainer: Trainer | undefined) {
    StorageUtil.saveStorage<Trainer>(StorageKeys.Trainer, trainer!)
    this._trainer = trainer
  }

  constructor() {
    this._trainer = StorageUtil.readStorage<Trainer>(StorageKeys.Trainer)
  }
}
