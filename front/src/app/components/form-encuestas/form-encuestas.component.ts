import { ContactUsService } from './../../landing-page/service/contact-us.service';
import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { EncuestaService } from './service/encuesta.service';
import {MatSort} from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { ModalEmailComponent } from '../modal-email/modal-email.component';


export interface Contact {
  id :number
  nombres: string;
  apellidos: number;
  correo: string;

}


@Component({
  selector: 'app-form-encuestas',
  templateUrl: './form-encuestas.component.html',
  styleUrls: ['./form-encuestas.component.sass'],
  animations:[
    trigger('fade',[
      transition('void => *',[
        style({ opacity: 0}),
        animate(1600)
      ]),

    ])
    ]
})


export class FormEncuestasComponent implements OnInit {
  displayedColumns: string[] = ['nombres', 'apellidos', 'email'];
  dataSource = new MatTableDataSource<Contact>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;
  contacts: any;
  isLoading = true;

  encuestaFormGroup: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    document: new FormControl('', Validators.required),
    estrato: new FormControl('', Validators.required),
    firma: new FormControl('', Validators.required),
    id_user: new FormControl('', Validators.required),
  });

  constructor( private encuestas: EncuestaService,private contactUsService:ContactUsService, public dialog: MatDialog  ) {

    this.contactUsService.selectContacts().subscribe((res:any)=>{
      this.contacts = res['contacts'];
      this.dataSource = new MatTableDataSource(this.contacts);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.isLoading = false;
    })
  }

  users : any;
  list_users: any;

  ngOnInit(): void {
    // this.encuestas.getusers().subscribe(response=>{
    // this.users = response;
    // this.list_users =  this.users['users']
    // console.log(response)

    // })
  }
  applyFilter(event :Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase()

    if( this.dataSource.paginator){
      this.dataSource.paginator.firstPage();
      this.dataSource.sort = this.sort;
    }
  }
  submit(){
    console.log(this.encuestaFormGroup.value)

  }

  openDialog() {
    this.dialog.open(ModalEmailComponent,{
      height: '400px',
      width: '600px',

    });
  }

}
