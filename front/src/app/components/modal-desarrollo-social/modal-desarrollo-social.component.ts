import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-desarrollo-social',
  templateUrl: './modal-desarrollo-social.component.html',
  styleUrls: ['./modal-desarrollo-social.component.sass']
})
export class ModalDesarrolloSocialComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {name: string}) { }
  ngOnInit(): void {
    console.log(this.data)
  }

}
