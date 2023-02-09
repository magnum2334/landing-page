import { Component, OnInit } from '@angular/core';
import { EncuestaService } from '../form-encuestas/service/encuesta.service';

@Component({
  selector: 'app-barrios',
  templateUrl: './barrios.component.html',
  styleUrls: ['./barrios.component.css']
})
export class BarriosComponent implements OnInit {
  barrioComuna: any
  comuna:any

  constructor(private encuestaService:EncuestaService) { }

  ngOnInit(): void {
    this.comuna = this.encuestaService.getComuna()

    this.encuestaService.barrios().subscribe((res:any)=>{
      const result = res['barrios'].filter((word: any) => word['comuna_id'] ==  this.encuestaService.getComuna());
      this.barrioComuna = result
    })
  }

}
