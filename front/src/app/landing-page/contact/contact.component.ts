import { async } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { debounceTime, Observable, Subject, filter } from 'rxjs';
import { EncuestaService } from 'src/app/components/form-encuestas/service/encuesta.service';
import { ContactUsService } from '../service/contact-us.service';
import {map, startWith} from 'rxjs/operators';
interface Barrio {
  name: string;
  comuna_id:string;
}
interface Lugar {
  lugar: string
}

interface SitioVotacion {
  id_comuna: any
  sector: string
  sitio: Lugar[]
}
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  mostrarOtroRadioButton = false;
  lider: any
  cedulaRe:any
  sitios_votacion_data: SitioVotacion[] = [
    {
      id_comuna:1,
      sector: 'Comuna 1',
      sitio: [
        {lugar: 'Barrios Ótun'},
        {lugar: 'El Balso'},
        {lugar: 'Las Vegas'},
        {lugar: 'La graciela'},
        {lugar: 'La Esnada'},
        {lugar: 'La Badea'},
        {lugar: 'Inquilinos'},
        {lugar: 'Minuto De Dios'},
        {lugar: 'Villa Alexandra'},
        {lugar: 'pedregales'},


      ],
    },
    {
      id_comuna:2,
      sector: 'Comuna 2',
      sitio: [
        {lugar: 'El Paraiso'},
        {lugar: 'San Gregorio'},
        {lugar: 'San Rafael'},
        {lugar: 'Olaya Herrera'},
        {lugar: 'San Rafael'},
        {lugar: 'San Rafael'},
        {lugar: 'San Rafael'},
        {lugar: 'San Rafael'},
        {lugar: 'San Rafael'},
        {lugar: 'San Rafael'},
        {lugar: 'San Rafael'},
        {lugar: 'San Rafael'},
        {lugar: 'San Rafael'},
      ],
    },
    {
      id_comuna:3,
      sector: 'Comuna 3',
      sitio: [
        {lugar: 'Cristo rey' },
        {lugar: 'Normal superior' },
        {lugar: 'Comfamiliar' },
      ],
    },
  ]

  barrios: any

  sitio : any = {}
  awaitSubmitEmail$ = new Subject<Event>();

  form: FormGroup = new FormGroup({
    nombres: new FormControl('', [Validators.required,]),
    apellidos: new FormControl('', [Validators.required,]),
    recaptcha: new FormControl ('', [Validators.required]),
    sitio_votacion: new FormControl ('', [Validators.required,]),
    documento: new FormControl('', [Validators.required]),
    celular: new FormControl('', [Validators.minLength(10)]),
    lider: new FormControl(''),
    ciudadano_dosque: new FormControl(''),
    barrio: new FormControl('', [Validators.required]),
  });
  myControl = new FormControl('', [Validators.required]);
  options: string[] = [];

  loading: Boolean = false

  siteKey: string = "6Leeu34jAAAAAM-0Tix1awG_2owritIAWC77_OPA"
  sisas: any;

  constructor(private _snackBar: MatSnackBar, private contactUsService: ContactUsService, private encuestaService:EncuestaService) { }
  filteredOptions!: Observable<string[]>;
   ngOnInit()  {
    this.onChangesClick()
  }
   async onChangesClick() {

    await this.encuestaService.barrios().subscribe((res:any)=>{
      this.barrios  = res
    })
    await this.encuestaService.sitiosVotacion().subscribe((res:any)=>{
      res['sitios_votacion'].filter((sitio:any)=>{ this.options.push(sitio.puesto)  })
    })

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );


    await this.awaitSubmitEmail$.pipe(debounceTime(1000)).subscribe((response) => {
      this.loading = false;
        let data = {
        nombres:this.form.value.nombres,
        apellidos:this.form.value.apellidos,
        recaptcha:this.form.value.recaptcha,
        sitio_votacion: {
          "id_comuna": this.form.value.sitio_votacion.id_comuna,
          "sector" : this.form.value.sitio_votacion.sector,
          "sitio" : this.sitio
        },
        barrio:this.form.value.barrio,
        celular: this.form.value.celular,
        documento: this.form.value.documento,
        lider:this.form.value.lider,
        ciudadano_dosque:this.form.value.ciudadano_dosque,
      }
      if(this.form.value){
        this.contactUsService.saveContact(data).subscribe((res:any)=>{
          if(res['status']){
            this._snackBar.open(`${res['ok']}✉`, "Cerrar", {
              duration: 3000,
              panelClass: "font"
            });
            this.form.reset()
          }

          },
        err =>
        this._snackBar.open("Verifica los datos por favor", "Cerrar", {
          duration: 3000,
          panelClass: "font",
        })
        )
      }
    })

  }

  sitiosChange(sitio:any) {
    this.sitio = sitio
  }

  submit(event: Event) {
    this.awaitSubmitEmail$.next(event);
    this.loading = true;
  }
   _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option:any) => option.toLowerCase().includes(filterValue));
  }

}
