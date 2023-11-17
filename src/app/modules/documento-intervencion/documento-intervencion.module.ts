import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { DocumentoIntervencionRoutingModule } from './documento-intervencion-routing.module';
import { DocumentoIntervencionComponent } from './listar/documento-intervencion/documento-intervencion.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    DocumentoIntervencionComponent
  ],
  imports: [
    CommonModule,
    DocumentoIntervencionRoutingModule,
    RouterModule
  ]
})
export class DocumentoIntervencionModule { }
