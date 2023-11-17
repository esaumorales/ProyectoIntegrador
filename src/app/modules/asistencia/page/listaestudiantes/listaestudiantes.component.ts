import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/Alumno';
import { ListestudiantesService } from 'src/app/modules/asistencia/page/services/listestudiantes.service';

@Component({
  selector: 'app-listaestudiantes',
  templateUrl: './listaestudiantes.component.html',
  styleUrls: ['./listaestudiantes.component.css']
})
export class ListaestudiantesComponent implements OnInit{

  alumnos: Alumno[] = [];

  constructor(
    private ListestudiantesService: ListestudiantesService
  ) { }

  ngOnInit(): void {
    this.ListestudiantesService.listar().subscribe(data => {
      this.alumnos = data
      console.log(data)
    });
    ;
  }

  Eliminar(id: number) {
    this.ListestudiantesService.eliminar(id).subscribe(() => {
      // Aquí puedes realizar alguna acción después de eliminar el documento, si es necesario.
      // Por ejemplo, puedes actualizar la lista de documentos.
      this.ListestudiantesService.listar().subscribe(data => {
        this.alumnos = data;
        console.log(data);
      });
    });
  }
}
