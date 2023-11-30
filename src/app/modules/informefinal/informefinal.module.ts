import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformefinalRoutingModule } from './informefinal-routing.module';
import { InformefinalComponent } from './pages/informefinal/informefinal.component';
import { AddinformefinalComponent } from './pages/addinformefinal/addinformefinal.component';
import { RegistrarinformefinalComponent } from './pages/registrarinformefinal/registrarinformefinal.component';


@NgModule({
  declarations: [
    InformefinalComponent,
    AddinformefinalComponent,
    RegistrarinformefinalComponent
  ],
  imports: [
    CommonModule,
    InformefinalRoutingModule
  ]
})
export class InformefinalModule { }
