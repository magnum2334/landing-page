import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { debounceTime, Subject } from 'rxjs';
import { ContactUsService } from '../service/contact-us.service';

@Component({
  selector: 'app-content-page',
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.component.sass']
})
export class ContentPageComponent implements OnInit {
  awaitSubmitEmail$ = new Subject<Event>();

  form: FormGroup = new FormGroup({
    nombres: new FormControl('', [Validators.required,]),
    apellidos: new FormControl('', [Validators.required,]),
    email: new FormControl('', [Validators.required, Validators.email, ]),
    celular: new FormControl('', [Validators.required,Validators.minLength(10)]),
    terminos: new FormControl('', Validators.required),
  });
  loading: Boolean = false

  constructor(private _snackBar: MatSnackBar, private contactUsService: ContactUsService) { }

  ngOnInit(): void {
    this.onChangesClick()
  }
  onChangesClick() {
    this.awaitSubmitEmail$.pipe(debounceTime(1000)).subscribe((response) => {
      this.loading = false;
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
    });
  }
  submit(event: Event) {
    this.awaitSubmitEmail$.next(event);
    this.loading = true;
  }

}
