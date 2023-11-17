import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisRolesComponent } from './registrar-roles/regis-roles/regis-roles.component';


const routes: Routes = [
  {
    path:'',
    component: RegisRolesComponent,
    outlet:"child"
  },

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisRolesRoutingModule { }
