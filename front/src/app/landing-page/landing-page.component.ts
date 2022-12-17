import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ContactUsService } from './service/contact-us.service';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.sass'],
  animations:[
    trigger('fade',[
      transition('void => *',[
        style({ opacity: 0}),
        animate(2500)
      ]),
    ])
    ]
})
export class LandingPageComponent implements OnInit {
  awaitSubmitEmail$ = new Subject<Event>();
 @Input() deviceXs!: boolean;

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

    // localStorage.clear()

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
