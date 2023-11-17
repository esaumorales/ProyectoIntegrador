import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformefinalRoutingModule } from './informefinal-routing.module';
import { InformefinalComponent } from './pages/informefinal/informefinal.component';
import { AddinformefinalComponent } from './pages/addinformefinal/addinformefinal.component';


@NgModule({
  declarations: [
    InformefinalComponent,
    AddinformefinalComponent
  ],
  imports: [
    CommonModule,
    InformefinalRoutingModule
  ]
})
export class InformefinalModule { }
