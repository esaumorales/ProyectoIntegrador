import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/models/Proyecto';
import { Tip_proyec } from 'src/app/models/Tip_proyect';
import { ListproyecGruposService } from 'src/app/modules/grupos/pages/services/listproyec-grupos.service';


@Component({
  selector: 'app-listaproyec-grupos',
  templateUrl: './listaproyec-grupos.component.html',
  styleUrls: ['./listaproyec-grupos.component.css']
})

export class ListaproyecGruposComponent implements OnInit{

  proyectos: Proyecto[] = [];

  Tip_proye: Tip_proyec[] = [];

  constructor(
    private ListproyecGruposService: ListproyecGruposService
  ) { }

  ngOnInit(): void {
    this.ListproyecGruposService.listar().subscribe(data => {
      this.proyectos = data
      console.log(data)
    });
    ;
  }

  Eliminar(id: number) {
    this.ListproyecGruposService.eliminar(id).subscribe(() => {
      // Aquí puedes realizar alguna acción después de eliminar el documento, si es necesario.
      // Por ejemplo, puedes actualizar la lista de documentos.
      this.ListproyecGruposService.listar().subscribe(data => {
        this.proyectos = data;
        console.log(data);
      });
    });
  }
}
