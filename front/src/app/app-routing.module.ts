import { Component, NgModule, ViewChildren } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavsiderAdminComponent } from './admin/navsider-admin/navsider-admin.component';
import { FormEncuestasComponent } from './components/form-encuestas/form-encuestas.component';
import { LoginComponent } from './components/login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PageErrorComponent } from './page-error/page-error.component';
import { AdminGuard } from './admin/guard/admin.guard'
import { ContentPageComponent } from './landing-page/content-page/content-page.component';
import { PresentacionComponent } from './landing-page/presentacion/presentacion.component';
const routes: Routes = [

  {
    path: '',
    component: LandingPageComponent,
    children:[ {
      path: '',
      redirectTo:'/inicio',
      pathMatch:'full'
    },

    {
      path: 'inicio',
      component: ContentPageComponent
    },
    {
      path: 'form',
      component: FormEncuestasComponent
    },
    {
      path: 'presentation',
      component: PresentacionComponent
    },






    ]
  },

  {
    path: 'login',
    component:LoginComponent
  },

  {
    path: 'admin',
    canActivate:[AdminGuard],
    component:NavsiderAdminComponent,
    children:[

    {
      path: '',
      component:FormEncuestasComponent
    },
    ]
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
