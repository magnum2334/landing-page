import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactUsService } from 'src/app/landing-page/service/contact-us.service';

@Component({
  selector: 'app-sms-masivos',
  templateUrl: './sms-masivos.component.html',
  styleUrls: ['./sms-masivos.component.sass']
})
export class SmsMasivosComponent implements OnInit {
  form: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required,]),
  });
  contacts: any;
  constructor(private contactUsService:ContactUsService) { }

  ngOnInit(): void {
  }
   onClick(){
    let data ={
      'contacts':JSON.stringify(this.contacts),
      'title':this.form.value.title,
    }
    this.contactUsService.smsconfirmation(data).subscribe((res)=>{

     console.log(res)
    })
  }

}
