import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/Alumno';
import { IntegrantesService } from 'src/app/modules/grupos/pages/services/integrantes.service';

@Component({
  selector: 'app-integrantes',
  templateUrl: './integrantes.component.html',
  styleUrls: ['./integrantes.component.css']
})
export class IntegrantesComponent {

  alumnos: Alumno[] = [];

  constructor(
    private IntegrantesService: IntegrantesService
  ) { }

  ngOnInit(): void {
    this.IntegrantesService.listar().subscribe(data => {
      this.alumnos = data
      console.log(data)
    });
    ;
  }

  Eliminar(id: number) {
    this.IntegrantesService.eliminar(id).subscribe(() => {
      // Aquí puedes realizar alguna acción después de eliminar el documento, si es necesario.
      // Por ejemplo, puedes actualizar la lista de documentos.
      this.IntegrantesService.listar().subscribe(data => {
        this.alumnos = data;
        console.log(data);
      });
    });
  }
}
