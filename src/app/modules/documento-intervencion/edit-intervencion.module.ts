import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { EditIntervencionRoutingModule } from './edit-intervencion-routing.module';
import { EditIntervencionComponent } from './editar/edit-intervencion/edit-intervencion.component';


@NgModule({
  declarations: [
    EditIntervencionComponent
  ],
  imports: [
    CommonModule,
    EditIntervencionRoutingModule,
    FormsModule
  ]
})
export class EditIntervencionModule { }
