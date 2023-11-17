import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentoIntervencionComponent } from './listar/documento-intervencion/documento-intervencion.component';

const routes: Routes = [
  {
    path: '',
    component: DocumentoIntervencionComponent, outlet: 'child'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentoIntervencionRoutingModule { }
