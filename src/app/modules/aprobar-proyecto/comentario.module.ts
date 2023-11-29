import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComentarioRoutingModule } from './comentario-routing.module';
import { ComentarioComponent } from './comentario/comentario.component';
import { RouterLink, RouterModule } from '@angular/router';




export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@NgModule({
  declarations: [
    ComentarioComponent
  ],

  imports: [
    CommonModule,
    ComentarioRoutingModule,
    RouterModule,
    RouterLink

  ]
})
export class ComentarioModule { }
