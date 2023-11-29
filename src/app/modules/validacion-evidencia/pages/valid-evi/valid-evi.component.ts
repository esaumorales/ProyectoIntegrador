import { Component } from '@angular/core';
import { Evidencia } from 'src/app/models/evidencia';
import { ValideviService } from '../services/validevi.service';
import { Proyecto } from 'src/app/models/Proyecto';

@Component({
  selector: 'app-valid-evi',
  templateUrl: './valid-evi.component.html',
  styleUrls: ['./valid-evi.component.css'],
})
export class ValidEviComponent {

  proyecto: Proyecto[] = [];

  constructor(private valideviService: ValideviService) {}

  ngOnInit(): void {
    this.valideviService.listar().subscribe((data) => {
      this.proyecto = data;
      console.log(data);
    });
  }

  Eliminar(id: number) {
    this.valideviService.eliminar(id).subscribe(() => {
      // Aquí puedes realizar alguna acción después de eliminar el documento, si es necesario.
      // Por ejemplo, puedes actualizar la lista de documentos.
      this.valideviService.listar().subscribe((data) => {
        this.proyecto = data;
        console.log(data);
      });
    });
  }
}
