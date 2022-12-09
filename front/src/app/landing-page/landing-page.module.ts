import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PropuestaPrincipalComponent } from './propuesta-principal/propuesta-principal.component';

@NgModule({
  declarations: [
    PresentacionComponent,
    ContactComponent,
    NavbarComponent,
    PropuestaPrincipalComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatCheckboxModule,
  ]
})
export class LandingPageModule { }
