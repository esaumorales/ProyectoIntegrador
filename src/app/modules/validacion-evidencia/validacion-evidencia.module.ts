import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValidacionEvidenciaRoutingModule } from './validacion-evidencia-routing.module';
import { ValidacionEvidenciaComponent } from './pages/validacion-evidencia/validacion-evidencia.component';
import { RouterLink, RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ValidacionEvidenciaComponent
  ],
  imports: [
    CommonModule,
    ValidacionEvidenciaRoutingModule,
    RouterLink,
    RouterModule
  ]
})
export class ValidacionEvidenciaModule { }
