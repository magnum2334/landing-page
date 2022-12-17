import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { debounceTime, Subject } from 'rxjs';
import { ContactUsService } from '../service/contact-us.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {

  awaitSubmitEmail$ = new Subject<Event>();

  form: FormGroup = new FormGroup({
    nombres: new FormControl('', [Validators.required,]),
    apellidos: new FormControl('', [Validators.required,]),
    recaptcha: new FormControl ('', [Validators.required,]),
    email: new FormControl('', [Validators.required, Validators.email, ]),
    celular: new FormControl('', [Validators.required,Validators.minLength(10)]),
    terminos: new FormControl('', Validators.required),
  });

  loading: Boolean = false

  siteKey: string = "6Leeu34jAAAAAM-0Tix1awG_2owritIAWC77_OPA"
  sitios_votacion: any;

  constructor(private _snackBar: MatSnackBar, private contactUsService: ContactUsService) { }

  ngOnInit(): void {

    this.onChangesClick()
    this.contactUsService.sitios_votacion().subscribe((res:any)=>{
      this.sitios_votacion = res
    })

  }
  onChangesClick() {
    this.awaitSubmitEmail$.pipe(debounceTime(1000)).subscribe((response) => {
      this.loading = false;
      if(this.form.value.recaptcha){
        this.contactUsService.saveContact(this.form.value).subscribe((res:any)=>{
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
          panelClass: "font"
        })
        )
      }
    });

  }
  submit(event: Event) {
    this.awaitSubmitEmail$.next(event);
    this.loading = true;
  }

}
