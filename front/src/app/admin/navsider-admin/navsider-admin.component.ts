import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { LoginService } from 'src/app/components/login/service/login.service';
import { Router } from '@angular/router';
import { animate, style, transition, trigger } from '@angular/animations';
@Component({
  selector: 'app-navsider-admin',
  templateUrl: './navsider-admin.component.html',
  styleUrls: ['./navsider-admin.component.css'],
  animations:[
    trigger('fade',[
      transition('void => *',[
        style({ opacity: 0}),
        animate(1000)
      ]),

    ])
    ]
})

export class NavsiderAdminComponent  implements OnInit {


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  token = localStorage.getItem('aut')

  constructor(private breakpointObserver: BreakpointObserver, private loginService:LoginService, private router:Router) {}


  ngOnInit(): void {

  console.log()

    this.loginService.me(this.token?.replace(/['"]+/g, '')).subscribe((response) =>{
     if (!response) {
      this.router.navigate(['']);
     }
    })
  }
  onClick(){
    this.router.navigate(['/admin/form']);
  }
  cerrar(){
    this.loginService.logout(this.token?.replace(/['"]+/g, '')).subscribe((response) =>{
         if (response) {

         }
     })
     localStorage.clear()
     this.router.navigate(['']);
  }

}
