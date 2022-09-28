import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './service/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],

})
export class LoginComponent implements OnInit {

  constructor(private loginService:LoginService, private router:Router) { }

  ngOnInit(): void {
  }
  form: FormGroup = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('', Validators.minLength(4)),
  });
  email = new FormControl('', [Validators.required, Validators.email]);

  submit() {
    if (this.form.valid) {
      this.loginService.login(this.form.value).subscribe((response:responseToken) =>{
        console.log(response.token)
       if (response) {
         localStorage.setItem('aut',JSON.stringify(response.token))
         this.router.navigate(['admin']);
       }
      })
    }
  }

}

interface responseToken {
  token?: string;
}
