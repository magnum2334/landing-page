import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EncuestaService } from './service/encuesta.service';


@Component({
  selector: 'app-form-encuestas',
  templateUrl: './form-encuestas.component.html',
  styleUrls: ['./form-encuestas.component.sass'],
  animations:[
    trigger('fade',[
      transition('void => *',[
        style({ opacity: 0}),
        animate(1000)
      ]),

    ])
    ]
})
export class FormEncuestasComponent implements OnInit {

  encuestaFormGroup: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    document: new FormControl('', Validators.required),
    estrato: new FormControl('', Validators.required),
    firma: new FormControl('', Validators.required),
    id_user: new FormControl('', Validators.required),
  });

  constructor( private encuestas: EncuestaService ) { }
  users : any;
  list_users: any;

  ngOnInit(): void {
    this.encuestas.getusers().subscribe(response=>{
    this.users = response;
    this.list_users =  this.users['users']
    console.log(response)

    })
  }

  submit(){
    console.log(this.encuestaFormGroup.value)
  }

}
