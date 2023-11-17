import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaestudiantesComponent } from './page/listaestudiantes/listaestudiantes.component';
import { ListaproyecComponent } from './page/listaproyec/listaproyec.component';

const routes: Routes = [
  {
    path: '',
    component: ListaproyecComponent, outlet: 'child'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsistenciaRoutingModule { }
