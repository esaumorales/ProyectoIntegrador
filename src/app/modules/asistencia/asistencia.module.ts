import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsistenciaRoutingModule } from './asistencia-routing.module';
import { ListaproyecComponent } from './page/listaproyec/listaproyec.component';
import { ListaestudiantesComponent } from './page/listaestudiantes/listaestudiantes.component';


@NgModule({
  declarations: [
    ListaproyecComponent,
    ListaestudiantesComponent
  ],
  imports: [
    CommonModule,
    AsistenciaRoutingModule
  ]
})
export class AsistenciaModule { }
