import { NgModule } from '@angular/core';
import { RouterLink, RouterModule, Routes } from '@angular/router';
import { ComentarComponent } from './comentar/comentar.component';


const routes: Routes = [

  {path:'', component:ComentarComponent, outlet:'child'},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, RouterLink]
})
export class ComentarRoutingModule { }
