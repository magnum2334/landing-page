import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EncuestaService } from '../form-encuestas/service/encuesta.service';

@Component({
  selector: 'app-centro-datos',
  templateUrl: './centro-datos.component.html',
  styleUrls: ['./centro-datos.component.css']
})
export class CentroDatosComponent implements OnInit {

  constructor(private router:Router, private encuestaService:EncuestaService) { }

  ngOnInit(): void {
  }
  opencomuna(str:any ) {
    this.router.navigate(['admin/centro-datos/barrios']);
    this.encuestaService.setComuna(str);
  }
  opencomunaSV(str:any ) {
    this.router.navigate(['admin/centro-datos/sitios-votacion']);
    this.encuestaService.setComuna(str);
  }

}
