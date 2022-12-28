import { animate, style, transition, trigger } from '@angular/animations';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { async, debounceTime, filter, Subject } from 'rxjs';
import { ContactUsService } from '../service/contact-us.service';


@Component({
  selector: 'app-content-page',
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {displayDefaultIndicatorType: false},
    },

  ],
  animations:[
    trigger('fade',[
      transition('void => *',[
        style({ opacity: 0}),
        animate(2500)
      ]),
    ])
    ]
})
export class ContentPageComponent implements OnInit {

  awaitSubmitEmail$ = new Subject<Event>();
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });


  publications_facebook:any  = [{
    link :'https://www.facebook.com/100086709365259/videos/840064510587321',
    width:'300',
    height:''
  },
  {
    link :'https://www.facebook.com/100086709365259/videos/840064510587321',
    width:300,
    height:250
  },
  {
    link :'https://www.facebook.com/100086709365259/videos/840064510587321',
    width:300,
    height:250
  }

]

  form: FormGroup = new FormGroup({
    nombres: new FormControl('', [Validators.required,]),
    apellidos: new FormControl('', [Validators.required,]),
    email: new FormControl('', [Validators.required, Validators.email, ]),
    celular: new FormControl('', [Validators.required,Validators.minLength(10)]),
    terminos: new FormControl('', Validators.required),
  });
  loading: Boolean = false
  instagramList:any[]= []
  constructor(private _snackBar: MatSnackBar, private contactUsService: ContactUsService,private _formBuilder: FormBuilder) { }
  twitterList:any
  fotosInstagram: any
  async ngOnInit() {

    this.onChangesClick()
    this.fotosInstagram = await this.contactUsService.Instagram()   ;
     this.contactUsService.twitter();
    //  this.fotosInstagram = this.instagramList.filter(=> ['media_type'] == 'IMAGE')


    // console.log(this.contactUsService.twitter())
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
