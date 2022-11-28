import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactUsService } from 'src/app/landing-page/service/contact-us.service';

@Component({
  selector: 'app-modal-email',
  templateUrl: './modal-email.component.html',
  styleUrls: ['./modal-email.component.sass']
})

export class ModalEmailComponent implements OnInit {
  contacts: any;

  constructor(private contactUsService:ContactUsService) { }
  form: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required,]),
    content: new FormControl('', [Validators.required,]),
  });

  ngOnInit(): void {
    this.contactUsService.selectContacts().subscribe((res:any)=>{
      let contacts = res['contacts']
      this.contacts = contacts.map((contact:any) => contact.email)

     })
  }
  onClick(){
    let data ={
      'contacts':JSON.stringify(this.contacts),
      'title':this.form.value.title,
      'content':this.form.value.content,
    }
    this.contactUsService.massiveEmails(data).subscribe((res)=>{

     console.log(res)
    })
  }

}
