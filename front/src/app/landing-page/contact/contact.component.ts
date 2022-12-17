import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { debounceTime,Subject } from 'rxjs';
import { ContactUsService } from '../service/contact-us.service';


interface Lugar {
  lugar: string
  mesa: string
}

interface SitioVotacion {
  sector: string
  sitio: Lugar[]
}
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {

  sitios_votacion_data: SitioVotacion[] = [
    {
      sector: 'Sector A',
      sitio: [
        {lugar: 'Santa isabel', mesa: '# 1'},
        {lugar: 'Guadalupe', mesa: '# 2'},
        {lugar: 'Naranjito', mesa: '# 3'},
      ],
    },
    {
      sector: 'Sector B',
      sitio: [
        {lugar: 'Manuel elkin', mesa: '# 1'},
        {lugar: 'Bosques de la acuarela', mesa: '# 2'},
        {lugar: 'Los pinos', mesa: '# 3'},
      ],
    },
    {
      sector: 'Sector C',
      sitio: [
        {lugar: 'Cristo rey', mesa: '# 1'},
        {lugar: 'Normal superior', mesa: '# 2'},
        {lugar: 'Comfamiliar', mesa: '# 3'},
      ],
    },
  ]

  sitio : any = {}
  awaitSubmitEmail$ = new Subject<Event>();

  form: FormGroup = new FormGroup({
    nombres: new FormControl('', [Validators.required,]),
    apellidos: new FormControl('', [Validators.required,]),
    recaptcha: new FormControl ('', [Validators.required,]),
    sitio_votacion: new FormControl ('', [Validators.required,]),
    email: new FormControl('', [Validators.required, Validators.email]),
    celular: new FormControl('', [Validators.required,Validators.minLength(10)]),
    terminos: new FormControl('', Validators.required),
  });

  loading: Boolean = false

  siteKey: string = "6Leeu34jAAAAAM-0Tix1awG_2owritIAWC77_OPA"

  constructor(private _snackBar: MatSnackBar, private contactUsService: ContactUsService) { }

  ngOnInit(): void {

    this.onChangesClick()
    //this.contactUsService.sitios_votacion().subscribe((res:any)=>{})
  }
  onChangesClick() {
    this.awaitSubmitEmail$.pipe(debounceTime(1000)).subscribe((response) => {
      this.loading = false;

      let data = {
        nombres:this.form.value.nombres,
        apellidos:this.form.value.apellidos,
        recaptcha:this.form.value.recaptcha,
        sitio_votacion: {
          "sector" : this.form.value.sitio_votacion.sector,
          "sitio" : this.sitio
        },
        email:this.form.value.email,
        celular: this.form.value.celular,
        terminos:this.form.value.terminos,
      }

      if(this.form.value.recaptcha){
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
