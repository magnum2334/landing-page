import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { PresentacionComponent } from './presentacion/presentacion.component';

@NgModule({
  declarations: [
    PresentacionComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatCheckboxModule,
  ]
})
export class LandingPageModule { }
