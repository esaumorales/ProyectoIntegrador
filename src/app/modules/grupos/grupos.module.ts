import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GruposRoutingModule } from './grupos-routing.module';
import { ListaproyecGruposComponent } from './pages/listaproyec-grupos/listaproyec-grupos.component';
import { RegistrargruposComponent } from './pages/registrargrupos/registrargrupos.component';


@NgModule({
  declarations: [
    ListaproyecGruposComponent,
    RegistrargruposComponent
  ],
  imports: [
    CommonModule,
    GruposRoutingModule
  ]
})
export class GruposModule { }
