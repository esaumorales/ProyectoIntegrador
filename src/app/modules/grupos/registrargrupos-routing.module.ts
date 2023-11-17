import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrargruposComponent } from './pages/registrargrupos/registrargrupos.component';

const routes: Routes = [
  {
    path: '',
    component: RegistrargruposComponent, outlet: 'child'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrargruposRoutingModule { }
