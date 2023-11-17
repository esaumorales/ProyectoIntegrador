import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntegrantesComponent}  from './pages/integrantes/integrantes.component';
import { IntegrantesRoutingModule } from './integrantes-routing.module';
import { RouterLink, RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    IntegrantesComponent
  ],
  imports: [
    CommonModule,
    IntegrantesRoutingModule,RouterLink, RouterModule
  ]
})
export class IntegrantesModule { }
