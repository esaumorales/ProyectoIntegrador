import { Component, OnInit } from '@angular/core';
import { Actividad_ejecu } from 'src/app/models/Actividad_ejecu';
import { ActividadEjecuService } from 'src/app/modules/asistencia/page/services/actividad-ejecu.service';

@Component({
  selector: 'app-listaproyec',
  templateUrl: './listaproyec.component.html',
  styleUrls: ['./listaproyec.component.css']
})
export class ListaproyecComponent {

  actividad_ejecu: Actividad_ejecu[] = [];

  constructor(
    private ActividadEjecuService: ActividadEjecuService
  ) { }

  ngOnInit(): void {
    this.ActividadEjecuService.listar().subscribe(data => {
      this.actividad_ejecu = data
      console.log(data)
    });
    ;
  }

  Eliminar(id: number) {
    this.ActividadEjecuService.eliminar(id).subscribe(() => {
      this.ActividadEjecuService.listar().subscribe(data => {
        this.actividad_ejecu = data;
        console.log(data);
      });
    });
  }
}
