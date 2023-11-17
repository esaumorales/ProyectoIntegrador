import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ProyectoRegistrarRoutingModule } from './proyecto-registrar-routing.module';
import { FormsModule } from '@angular/forms';
import { ProyectoRegistrarComponent } from './registrar/proyecto-registrar/proyecto-registrar.component';




@NgModule({
  declarations: [
    ProyectoRegistrarComponent,

  ],
  imports: [
    CommonModule,
    ProyectoRegistrarRoutingModule,
    FormsModule
  ]
})
export class ProyectoRegistrarModule { }
