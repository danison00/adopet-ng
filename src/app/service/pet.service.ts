import { Injectable } from '@angular/core';
import { Animal } from '../models/animal';
import { Observable, delay, of } from 'rxjs';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(private util: UtilService) {
  }
  public getPets(): Observable<Animal[]> {

    return of(this.util.dogs).pipe(delay(2000));

  }
  public findById(id: number): Observable<Animal | undefined> {

    let pet$;

    this.util.dogs.forEach((pet) => {
      if (pet.id === id)
        pet$ = pet;
    });
    
    return of(pet$);

  }

}
