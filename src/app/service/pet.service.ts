import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Animal } from '../models/animal';
import { Observable, delay, map, of } from 'rxjs';
import { UtilService } from './util.service';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(private util: UtilService, private http: HttpClient) {
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
  public savePet(pet: FormData): Observable<any> {
    const headers = new HttpHeaders();

    headers.append('Content-Type', 'multipart/form-data');

  
    return this.http.post('/api/pets', pet, { observe: 'response' }).pipe(
      map((res: HttpResponse<any>)=>{
        if(res.ok){
          return true;
        }
        return false;
      })
    );
  }

}
