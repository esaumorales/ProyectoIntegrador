import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarProyectoComponent } from './editar/editar-proyecto/editar-proyecto.component';



const routes: Routes = [
  {
    path:'',
    component: EditarProyectoComponent,
    outlet:"child"
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditarProyectoRoutingModule { }