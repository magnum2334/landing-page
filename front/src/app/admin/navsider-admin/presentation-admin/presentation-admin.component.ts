
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalAdminPresentationComponent } from './modal-admin-presentation/modal-admin-presentation.component';

@Component({
  selector: 'app-presentation-admin',
  templateUrl: './presentation-admin.component.html',
  styleUrls: ['./presentation-admin.component.sass']
})
export class PresentationAdminComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }
  modalAdminPren(){
  console.log("so")
    this.dialog.open(ModalAdminPresentationComponent,{
      height: '400px',
      width: '600px',

    });
  }

}
