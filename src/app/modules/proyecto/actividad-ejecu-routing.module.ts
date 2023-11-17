import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActividadEjecuComponent } from './regis-actividad_ejecu/actividad-ejecu/actividad-ejecu.component';



const routes: Routes = [
  {
    path:'',
    component: ActividadEjecuComponent,
    outlet:"child"
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActividadEjecuRoutingModule { }