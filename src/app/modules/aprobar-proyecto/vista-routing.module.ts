import { NgModule } from '@angular/core';
import { RouterLink, RouterModule, Routes } from '@angular/router';
import { VistaComponent } from './vista/vista.component';


const routes: Routes = [
  {
    path:'',
    component:VistaComponent, outlet:'child'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, RouterLink]
})
export class VistaRoutingModule { }
