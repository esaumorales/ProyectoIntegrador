import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProyectoRegistrarComponent } from './registrar/proyecto-registrar/proyecto-registrar.component';



const routes: Routes = [
  {
    path:'',
    component: ProyectoRegistrarComponent,
    outlet:"child"
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProyectoRegistrarRoutingModule { }