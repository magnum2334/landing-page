import { SitiosVotacionComponent } from './components/sitios-votacion/sitios-votacion.component';
import { BarriosComponent } from './components/barrios/barrios.component';
import { FirmasComponent } from './components/firmas/firmas.component';
import { CentroDatosComponent } from './components/centro-datos/centro-datos.component';
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
import { PresentationAdminComponent } from './admin/navsider-admin/presentation-admin/presentation-admin.component';
import { ContactComponent } from './landing-page/contact/contact.component';

const routes: Routes = [

  {
    path: '',
    component: LandingPageComponent,
    children: [{
      path: '',
      redirectTo: '/inicio',
      pathMatch: 'full'
    },

    {
      path: 'inicio',
      component: ContentPageComponent
    },
    {
      path: 'contacto',
      component: ContactComponent
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
    component: LoginComponent
  },

  {
    path: 'admin',
    canActivate: [AdminGuard],
    component: NavsiderAdminComponent,
    children: [

      {
        path: '',
        component: FormEncuestasComponent
      },
      {
        path: 'centro-datos/barrios',
        component: BarriosComponent
      },
      {
        path: 'centro-datos/sitios-votacion',
        component: SitiosVotacionComponent
      },
      {
        path: 'centro-datos',
        component: CentroDatosComponent,
      },
      {
        path: 'firmas',
        component: FirmasComponent
      },

    ]
  },
  {
    path: '**',
    component: PageErrorComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
