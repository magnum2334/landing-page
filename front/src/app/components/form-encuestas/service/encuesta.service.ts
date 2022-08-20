import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EncuestaService {

  constructor(
    private http:HttpClient) { }


  insertEncuesta(encuesta: any) {
    return this.http.post(`${environment.baseUrl}encuesta/create`, encuesta);
  }

  getusers() {
    return this.http.get(`${environment.baseUrl}allusers`);
  }
}
