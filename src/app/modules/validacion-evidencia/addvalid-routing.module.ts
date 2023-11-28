import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddvalidComponent } from './pages/addvalid/addvalid.component';

const routes: Routes = [
  {
    path:'',
    component: AddvalidComponent, outlet:'child'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddvalidRoutingModule { }
