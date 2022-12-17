import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { ContactComponent } from './contact/contact.component';
import { PropuestaPrincipalComponent } from './propuesta-principal/propuesta-principal.component';
import { CarouserDynamicComponent } from './carouser-dynamic/carouser-dynamic.component';

@NgModule({
  declarations: [
    PresentacionComponent,
    ContactComponent,
    PropuestaPrincipalComponent,
    CarouserDynamicComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatCheckboxModule,
  ]
})
export class LandingPageModule { }
