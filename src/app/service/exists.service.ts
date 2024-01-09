import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExistsService {

  constructor(private http: HttpClient) { }

  public cpfExists(cpf: string): Observable<boolean> {
    return this.http.get("/api/verify-if-exists/cpf?cpf=" + cpf, { observe: "response" }).pipe(
      map((response: HttpResponse<any>) => {
         return response.ok;
        
      })
    );
  }
  public usernameNonExists(username: string): Observable<boolean>{

    return this.http.get("/api/verify-if-exists/username?username="+username, {observe: "response"}).pipe(

      map((response: HttpResponse<any>)=>{
        return response.ok;
      })

    );
  }
}
