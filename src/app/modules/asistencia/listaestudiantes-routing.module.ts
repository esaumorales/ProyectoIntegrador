import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaestudiantesComponent } from './page/listaestudiantes/listaestudiantes.component';

const routes: Routes = [
  {
    path: '',
    component: ListaestudiantesComponent, outlet: 'child'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaestudiantesRoutingModule { }
