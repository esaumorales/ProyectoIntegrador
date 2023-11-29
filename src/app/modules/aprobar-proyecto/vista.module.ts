import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VistaRoutingModule } from './vista-routing.module';
import { RouterLink } from '@angular/router';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    VistaRoutingModule,
    RouterLink
  ]
})
export class VistaModule { }
