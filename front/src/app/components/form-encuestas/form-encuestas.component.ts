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
const ELEMENT_DATA: Contact[] = [
  {id: 1, nombres: 'Hydrogen', apellidos: 1.0079, correo: 'H'},
  {id: 2, nombres: 'Helium', apellidos: 4.0026, correo: 'He'},
  {id: 3, nombres: 'Lithium', apellidos: 6.941, correo: 'Li'},
  {id: 4, nombres: 'Beryllium', apellidos: 9.0122, correo: 'Be'},
  {id: 5, nombres: 'Boron', apellidos: 10.811, correo: 'B'},
  {id: 6, nombres: 'Carbon', apellidos: 12.0107, correo: 'C'},
  {id: 7, nombres: 'Nitrogen', apellidos: 14.0067, correo: 'N'},
  {id: 8, nombres: 'Oxygen', apellidos: 15.9994, correo: 'O'},
  {id: 9, nombres: 'Fluorine', apellidos: 18.9984, correo: 'F'},
  {id: 10, nombres: 'Neon', apellidos: 20.1797, correo: 'Ne'},
  {id: 11, nombres: 'Sodium', apellidos: 22.9897, correo: 'Na'},
  {id: 12, nombres: 'Magnesium', apellidos: 24.305, correo: 'Mg'},
  {id: 13, nombres: 'Aluminum', apellidos: 26.9815, correo: 'Al'},
  {id: 14, nombres: 'Silicon', apellidos: 28.0855, correo: 'Si'},
  {id: 15, nombres: 'Phosphorus', apellidos: 30.9738, correo: 'P'},
  {id: 16, nombres: 'Sulfur', apellidos: 32.065, correo: 'S'},
  {id: 17, nombres: 'Chlorine', apellidos: 35.453, correo: 'Cl'},
  {id: 18, nombres: 'Argon', apellidos: 39.948, correo: 'Ar'},
  {id: 19, nombres: 'Potassium', apellidos: 39.0983, correo: 'K'},
  {id: 20, nombres: 'Calcium', apellidos: 40.078, correo: 'Ca'},
];
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

  ngAfterViewInit() {


  }
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
