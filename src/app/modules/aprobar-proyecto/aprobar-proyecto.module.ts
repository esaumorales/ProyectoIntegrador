import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AprobarProyectoRoutingModule } from './aprobar-proyecto-routing.module';
import { AprobarProyectoComponent } from './pages/aprobar-proyecto/aprobar-proyecto.component';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink, RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AprobarProyectoComponent,

  ],
  imports: [
    CommonModule,
    AprobarProyectoRoutingModule,
    MatButtonModule,
    RouterModule,
    RouterLink
  ]
})
export class AprobarProyectoModule { }
