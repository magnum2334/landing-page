import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient )
     { }


  login(encuesta: any) {
    return this.http.post(`${environment.baseUrl}login`, encuesta);
  }
  me(token: any) {
    let apiUrl =`${environment.baseUrl}me`
    const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  })

  return this.http.get(apiUrl, { headers:headers })
  }

  logout(token: any) {
    let apiUrl =`${environment.baseUrl}logout`
    const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  })

    return this.http.get(apiUrl, { headers:headers });
  }



}
