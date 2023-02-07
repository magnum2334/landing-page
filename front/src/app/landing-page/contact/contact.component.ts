import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { debounceTime,Subject } from 'rxjs';
import { ContactUsService } from '../service/contact-us.service';


interface Barrio {
  nombre_barrio: string;
}
interface Lugar {
  lugar: string
}

interface SitioVotacion {
  sector: string
  sitio: Lugar[]
}
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  lider: any
  cedulaRe:any
  sitios_votacion_data: SitioVotacion[] = [
    {
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
      sector: 'Comuna 3',
      sitio: [
        {lugar: 'Cristo rey' },
        {lugar: 'Normal superior' },
        {lugar: 'Comfamiliar' },
      ],
    },
  ]

  barrios: Barrio[] = [
    { nombre_barrio: 'Guadalupe'},
    { nombre_barrio: 'Santa Isabel'},
    { nombre_barrio: 'La mariana'},
  ];

  sitio : any = {}
  awaitSubmitEmail$ = new Subject<Event>();

  form: FormGroup = new FormGroup({
    nombres: new FormControl('', [Validators.required,]),
    apellidos: new FormControl('', [Validators.required,]),
    recaptcha: new FormControl ('', [Validators.required,]),
    sitio_votacion: new FormControl ('', [Validators.required,]),
    barrio: new FormControl('', [Validators.email]),
    documento: new FormControl('', [Validators.required]),
    celular: new FormControl('', [Validators.minLength(10)]),
    terminos: new FormControl('', Validators.required),
  });

  loading: Boolean = false

  siteKey: string = "6Leeu34jAAAAAM-0Tix1awG_2owritIAWC77_OPA"

  constructor(private _snackBar: MatSnackBar, private contactUsService: ContactUsService) { }

  ngOnInit(): void {
    this.onChangesClick()
  }

  onChangesClick() {
    this.awaitSubmitEmail$.pipe(debounceTime(1000)).subscribe((response) => {
      this.loading = false;

      let data = {
        nombres:this.form.value.nombres,
        apellidos:this.form.value.apellidos,
        //recaptcha:this.form.value.recaptcha,
        sitio_votacion: {
          "sector" : this.form.value.sitio_votacion.sector,
          "sitio" : this.sitio
        },
        barrio:this.form.value.barrio,
        celular: this.form.value.celular,
        documento: this.form.value.documento,
        terminos:this.form.value.terminos,
      }

      if(this.form.value.recaptcha){
        console.log(data['documento']);
        this.contactUsService.saveContact(data).subscribe((res:any)=>{
          if(res['status']){
            this._snackBar.open(`${res['ok']}✉`, "Cerrar", {
              duration: 3000,
              panelClass: "font"
            });
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

}
