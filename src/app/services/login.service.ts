import { Injectable } from '@angular/core';
import { Observable, map, of, switchMap } from 'rxjs';
import { Trainer } from '../models/trainer.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
const apiTrainersUrl: string = environment.apiTrainersUrl

const apiKey = environment.API_TRAINERS_KEY
console.log(apiKey)

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private readonly http: HttpClient) { }

  public login(username: string): Observable<Trainer> {
    console.log("HERE")
    // let trainer = this.getTrainer(name)
    // if (trainer === undefined) {
    //   const newTrainer = this.createTrainer(name)
    //   return this.postTrainer(newTrainer)
    // } else {
    //   return this.postTrainer(trainer)
    // }
    return this.getTrainer(username).pipe(
      switchMap((trainer: Trainer | undefined) => {
        console.log("THIS IS THE");
        
        console.log(trainer)
        
        if (trainer === undefined) {
          let newTrainer = this.createTrainer(username)
          return this.postTrainer(newTrainer)
        }
        return of(trainer)
      })
    )
  }

  private getTrainer(username: string): Observable<Trainer | undefined> {
    console.log("HERE IS USERNAME")
    console.log(username)
    const specificTrainerUrl: string = (`${apiTrainersUrl}?username=${username.toString()}`)
    console.log(specificTrainerUrl)
    return this.http.get<[Trainer]>(specificTrainerUrl).pipe(map((result: [Trainer]) => result.pop()))
  }

  private createTrainer(username: string): Trainer {
    let trainer: Trainer = {
      username: username,
      pokemon: []
    }
    return trainer
  }

  private postTrainer(trainer: Trainer | Observable<Trainer>): Observable<Trainer> {
    console.log(apiTrainersUrl)
    const headers = new HttpHeaders().set('x-api-key', apiKey)
  
    return this.http.post<Trainer>(apiTrainersUrl, trainer, {headers})
  }
}
