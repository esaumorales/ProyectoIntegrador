import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FormsModule } from '@angular/forms';
import { EditarProyectoRoutingModule } from './editar-proyecto-routing.module';
import { EditarProyectoComponent } from './editar/editar-proyecto/editar-proyecto.component';



@NgModule({
  declarations: [
    EditarProyectoComponent
  ],
  imports: [
    CommonModule,
    EditarProyectoRoutingModule,
    FormsModule
  ]
})
export class EditarProyectoModule { }
