import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProyectoRoutingModule } from './proyecto-routing.module';
import { ProyectoComponent } from './listar/proyecto/proyecto.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProyectoComponent,
 
  ],
  imports: [
    CommonModule,
    ProyectoRoutingModule,
    RouterModule,
    FormsModule
  ]
})
export class ProyectoModule { }
