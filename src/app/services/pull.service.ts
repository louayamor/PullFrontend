import { Injectable } from '@angular/core';
import { Pull } from '../model/pull.model';
import { Observable } from 'rxjs';
import { 
  HttpClient, 
  HttpHeaders 
} 
from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };

@Injectable({
  providedIn: 'root'
})


export class PullService {
  apiURL: string = 'http://localhost:8080/pulls/api';
  pulls : Pull[]; //un tableau de Pull

  constructor(private http : HttpClient) {
  }
  
  listePull(): Observable<Pull[]>{
    return this.http.get<Pull[]>(this.apiURL);
  }
  
  ajouterPull( prod: Pull):Observable<Pull>{
    return this.http.post<Pull>(this.apiURL, prod, httpOptions);
    }
    
  }

  supprimerPull(id : number) {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
    }
    //ou Bien
    /* this.pulls.forEach((cur, index) => {
    if(prod.idPull === cur.idPull) {
    this.pulls.splice(index, 1);
    }
    }); */

  consulterPull(id: number): Observable<Pull> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Pull>(url);
    }

  trierPulls(){
    this.pulls = this.pulls.sort((n1,n2) => {
      if (n1.idPull > n2.idPull) {
        return 1;
      }
      if (n1.idPull < n2.idPull) {
        return -1;
      }
        return 0;
      });
    }
    updatePull(prod :Pull) : Observable<Pull>{
      return this.http.put<Pull>(this.apiURL, prod, httpOptions);
    }
    

      
    
}
