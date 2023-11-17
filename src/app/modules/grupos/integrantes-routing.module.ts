import { NgModule } from '@angular/core';
import { RouterLink, RouterModule, Routes } from '@angular/router';
import { IntegrantesComponent } from './pages/integrantes/integrantes.component';

const routes: Routes = [
  {
    path: '',
    component: IntegrantesComponent, outlet: 'child'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntegrantesRoutingModule { }
