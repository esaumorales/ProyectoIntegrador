import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddinformefinalComponent } from './pages/addinformefinal/addinformefinal.component';

const routes: Routes = [
  {
    path: '',
    component: AddinformefinalComponent, outlet: 'child'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddinformefinalRoutingModule { }
