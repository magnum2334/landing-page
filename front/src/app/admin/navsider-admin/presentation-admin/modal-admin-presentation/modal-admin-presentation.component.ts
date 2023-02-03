import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { ContactUsService } from 'src/app/landing-page/service/contact-us.service';

@Component({
  selector: 'app-modal-admin-presentation',
  templateUrl: './modal-admin-presentation.component.html',
  styleUrls: ['./modal-admin-presentation.component.sass']
})
export class ModalAdminPresentationComponent implements OnInit {
  @ViewChild(MatAccordion) accordion!: MatAccordion;
  panelOpenState = false;
  constructor(private contactUsService:ContactUsService) { }

  ngOnInit(): void {
  }
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

}
