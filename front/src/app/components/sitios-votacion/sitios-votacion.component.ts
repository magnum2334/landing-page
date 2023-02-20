import { Component, OnInit } from '@angular/core';
import { EncuestaService } from '../form-encuestas/service/encuesta.service';

@Component({
  selector: 'app-sitios-votacion',
  templateUrl: './sitios-votacion.component.html',
  styleUrls: ['./sitios-votacion.component.sass']
})
export class SitiosVotacionComponent implements OnInit {
  comuna: any;
  sitioVotacion: any;

  constructor(private encuestaService:EncuestaService) { }

  ngOnInit(): void {
    this.comuna = this.encuestaService.getComuna()

    this.encuestaService.sitiosVotacion().subscribe((res:any)=>{
      const result = res['sitios_votacion'].filter((word: any) => word['comuna_id'] ==  this.encuestaService.getComuna());
      this.sitioVotacion = result
    })
  }

}
