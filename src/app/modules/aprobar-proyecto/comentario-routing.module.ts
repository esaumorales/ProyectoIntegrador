import { NgModule } from '@angular/core';
import { RouterLink, RouterModule, Routes } from '@angular/router';
import { ComentarioComponent } from './comentario/comentario.component';


const routes: Routes = [
  {
    path:'',
    component:ComentarioComponent, outlet:'child'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, RouterLink]
})
export class ComentarioRoutingModule { }
