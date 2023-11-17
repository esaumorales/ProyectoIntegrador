import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformefinalComponent } from './pages/informefinal/informefinal.component';

const routes: Routes = [
  {
    path: '',
    component: InformefinalComponent, outlet: 'child'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InformefinalRoutingModule { }
