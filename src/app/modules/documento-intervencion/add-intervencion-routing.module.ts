import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddIntervencionComponent } from './añadir/add-intervencion/add-intervencion.component';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path: '',
    component: AddIntervencionComponent, outlet: 'child'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)], 
  exports: [RouterModule]
})
export class AddIntervencionRoutingModule { }
