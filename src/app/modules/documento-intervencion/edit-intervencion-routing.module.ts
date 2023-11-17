import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditIntervencionComponent } from './editar/edit-intervencion/edit-intervencion.component';

const routes: Routes = [
  {
    path: '',
    component: EditIntervencionComponent, outlet: 'child'
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditIntervencionRoutingModule { }
