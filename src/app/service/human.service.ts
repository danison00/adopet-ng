import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HumanService {

  constructor(private http: HttpClient) { }

  public createHuman(human: any){
    return this.http.post("/api/human", human, {observe: "response"}).pipe(
      map((response: HttpResponse<any>) =>{
        return response.ok
      })
    );
  }
}
