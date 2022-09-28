import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/components/login/service/login.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  loginService!: LoginService;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let access:boolean = false
    let token = localStorage.getItem('aut')

    if(token){
      access = true;
    }

    return access;
  }

}
