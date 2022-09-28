import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormEncuestasComponent } from '../components/form-encuestas/form-encuestas.component';
import { LoginComponent } from '../components/login/login.component';
import { NavsiderAdminComponent } from './navsider-admin/navsider-admin.component';

const routes: Routes = [


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
