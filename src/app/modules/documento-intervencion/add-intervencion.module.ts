  import { NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { AddIntervencionRoutingModule } from './add-intervencion-routing.module';
  import { FormsModule} from '@angular/forms';
import { AddIntervencionComponent } from './añadir/add-intervencion/add-intervencion.component';


  @NgModule({
    declarations: [
      AddIntervencionComponent
    ],
    imports: [
      CommonModule,
      AddIntervencionRoutingModule,
      FormsModule    ]
  })
  export class AddIntervencionModule { }
