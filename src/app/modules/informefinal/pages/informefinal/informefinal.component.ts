
import { Proyecto } from 'src/app/models/Proyecto';
import { InformefinalService } from './../services/informefinal.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-informefinal',
  templateUrl: './informefinal.component.html',
  styleUrls: ['./informefinal.component.css']
})
export class InformefinalComponent {
  proyectos: Proyecto[] = [];

  constructor(
    private informefinalService: InformefinalService
  ) { }

  ngOnInit(): void {
    this.informefinalService.listar().subscribe(data => {
      this.proyectos = data
      console.log(data)
    });
    ;
  }


  Eliminar(id: number) {
    this.informefinalService.eliminar(id).subscribe(() => {
      // Aquí puedes realizar alguna acción después de eliminar el documento, si es necesario.
      // Por ejemplo, puedes actualizar la lista de documentos.
      this.informefinalService.listar().subscribe(data => {
        this.proyectos = data;
        console.log(data);
      });
    });
  }

}
