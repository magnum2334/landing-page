import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  constructor(private http: HttpClient) { }

  saveContact(encuesta: any) {
    return this.http.post(`${environment.baseUrl}save-contact`, encuesta);
  }
  selectContacts() {
    return this.http.get(`${environment.baseUrl}selectContacts`);
  }
  massiveEmails(data: any) {
    return this.http.post(`${environment.baseUrl}massiveEmails`, data);
  }
  smsconfirmation() {
    return this.http.get(`${environment.baseUrl}smsconfirmation`);
  }
  resTwitter: any
 async twitter() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions: any = {
      method: "get",
      headers: myHeaders,
      redirect: "follow",

    };

    await fetch("https://v1.nocodeapi.com/juanpateams/twitter/TGJHSnSWddEgJIlH?type=<type>", requestOptions)
      .then(response => response.text())
      .then((result:any) => console.log(result)  )
      .catch(error => console.log('error', error));
      console.log(this.resTwitter)

  }
  resInstagram: any
  async Instagram() {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    let requestOptions: any = {
      method: "get",
      headers: myHeaders,
      redirect: "follow",
      mode: 'cors'
    };

    await fetch("https://v1.nocodeapi.com/juanpateams/instagram/vjLLpECPdmfRFNnw", requestOptions)
      .then(response => response.text())
      .then(result => this.resInstagram = result)
      .catch(error => console.log('error', error));
      const result = JSON.parse(this.resInstagram)
      let imgs = result.data.filter((result: any) => result.media_type == "IMAGE" )
      console.log("data images : ",imgs);

      return imgs
  }


}
