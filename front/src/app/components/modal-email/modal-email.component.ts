import { Component, OnInit } from '@angular/core';
import { ContactUsService } from 'src/app/landing-page/service/contact-us.service';

@Component({
  selector: 'app-modal-email',
  templateUrl: './modal-email.component.html',
  styleUrls: ['./modal-email.component.sass']
})

export class ModalEmailComponent implements OnInit {

  constructor(private contactUsService:ContactUsService) { }

  ngOnInit(): void {
  }
  onClick(){
    this.contactUsService.massiveEmails().subscribe((res)=>{
     console.log(res)
    })
  }

}
