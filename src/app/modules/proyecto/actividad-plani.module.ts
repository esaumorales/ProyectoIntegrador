import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ActividadPlaniRoutingModule } from './actividad-plani-routing.module';
import { ActividadPlaniComponent } from './regis-actividad_plani/actividad-plani/actividad-plani.component';


@NgModule({
  declarations: [
    ActividadPlaniComponent,
  ],
  imports: [
    CommonModule,
    ActividadPlaniRoutingModule,
    RouterModule
  ]
})
export class ActividadPlaniModule { }
