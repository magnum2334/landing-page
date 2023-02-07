import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalDesarrolloSocialComponent } from 'src/app/components/modal-desarrollo-social/modal-desarrollo-social.component';

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.css']
})
export class PresentacionComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openModal(strin: any) {

    switch (strin) {
      case strin == 'Sanidad':
        strin = 'Sanidad'

        break;
      case strin == 'Turismo':
        strin = 'Turismo'
        break;
      case strin == 'Seguridad':
        strin = 'Seguridad'
        break;
      case strin == 'Renovables':
          strin == 'Renovables'
        break;
      case strin == 'Movilidad':
        strin == 'Movilidad'
        break;
      case strin == 'Desarrollo digital':
        strin == 'Desarrollo digital'
        break;
      case strin == 'Educacion':
        strin == 'Educacion'
        break;
      case strin == 'Tercera edad':
        strin == 'Tercera edad'
        break;
      default:
        break;
    }
    this.dialog.open(ModalDesarrolloSocialComponent, {
      height: '100%',
      width: '100%',
      data: { name: strin }
    });
  }


}
