import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EncuestaService {

  constructor(
    private http:HttpClient) { }

  comuna:any
  insertEncuesta(encuesta: any) {
    return this.http.post(`${environment.baseUrl}encuesta/create`, encuesta);
  }

  getusers() {
    return this.http.get(`${environment.baseUrl}allusers`);
  }

  barrios(){
    return this.http.get(`${environment.baseUrl}barrios`);
  }
  sitiosVotacion(){
    return this.http.get(`${environment.baseUrl}sitios_votacion`);
  }

  setComuna(comuna:any){
  this.comuna = comuna;
  }
  getComuna(){
    return this.comuna
  }

}
