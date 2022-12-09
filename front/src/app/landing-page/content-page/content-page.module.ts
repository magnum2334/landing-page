import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ContentPageComponent } from './content-page.component';

@NgModule({
  declarations: [ContentPageComponent],
  imports: [
    CommonModule,
    ContentPageModule
  ]
})
export class ContentPageModule { }
