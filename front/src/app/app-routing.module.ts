import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormEncuestasComponent } from './components/form-encuestas/form-encuestas.component';
import { LoginComponent } from './components/login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PageErrorComponent } from './page-error/page-error.component';
const routes: Routes = [
  {
    path: '',
    redirectTo:'/landing-page',
    pathMatch:'full'
  },

  {
    path: 'form',
    component:FormEncuestasComponent
  },
  {
    path: 'landing-page',
    component: LandingPageComponent
  },
  {
    path: 'login',
    component:LoginComponent
  },
  {
    path: '**',
    component:PageErrorComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
