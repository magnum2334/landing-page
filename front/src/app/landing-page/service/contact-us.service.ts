import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  constructor(private http:HttpClient) { }

  saveContact(encuesta: any) {
    return this.http.post(`${environment.baseUrl}save-contact`, encuesta);
  }
  selectContacts(){
    return this.http.get(`${environment.baseUrl}selectContacts`);
  }
  massiveEmails(data: any){
    return this.http.post(`${environment.baseUrl}massiveEmails`, data);
  }
  smsconfirmation(){
    return this.http.get(`${environment.baseUrl}smsconfirmation`);
  }

  twitter(){
    return this.http.get(`${environment.baseUrl}twitter`);
  }

  sitios_votacion(){
    return this.http.get(`${environment.baseUrl}sitios_votacion`);
  }

}
