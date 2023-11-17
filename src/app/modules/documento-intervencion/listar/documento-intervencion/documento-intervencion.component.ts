import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Documento } from 'src/app/models/documento';
import { DocumentoService } from 'src/app/modules/documento-intervencion/services/documento.service';

@Component({
  selector: 'app-documento-intervencion',
  templateUrl: './documento-intervencion.component.html',
  styleUrls: ['./documento-intervencion.component.css']
})

export class DocumentoIntervencionComponent implements OnInit {

  documentos: Documento[] = [];

  documento: Documento = new Documento();

  constructor(
    private documentoService: DocumentoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.documentoService.listar().subscribe(data => {
      this.documentos = data
      console.log(data)
    });

  }

  Editar(id: number) {
    this.documentoService.editar(id, this.documento).subscribe(dato => {
      this.router.navigate(['/home/documento_intervencion/edit']);
    })
  }



  Eliminar(id: number) {
    this.documentoService.eliminar(id).subscribe(() => {
      // Aquí puedes realizar alguna acción después de eliminar el documento, si es necesario.
      // Por ejemplo, puedes actualizar la lista de documentos.
      this.documentoService.listar().subscribe(data => {
        this.documentos = data;
        console.log(data);
      });
    });

    
  }



}
