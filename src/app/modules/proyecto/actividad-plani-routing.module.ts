import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActividadPlaniComponent } from './regis-actividad_plani/actividad-plani/actividad-plani.component';



const routes: Routes = [
  {
    path:'',
    component: ActividadPlaniComponent,
    outlet:"child"
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActividadPlaniRoutingModule { }