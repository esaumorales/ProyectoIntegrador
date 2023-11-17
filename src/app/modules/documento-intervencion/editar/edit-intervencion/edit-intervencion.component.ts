import { Component, OnInit } from '@angular/core';
import { Documento } from 'src/app/models/documento';
import { DocumentoService } from 'src/app/modules/documento-intervencion/services/documento.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Ubigeo } from 'src/app/models/Ubigeo';
import { Parametros } from 'src/app/models/Parametros';


@Component({
  selector: 'app-edit-intervencion',
  templateUrl: './edit-intervencion.component.html',
  styleUrls: ['./edit-intervencion.component.css']
})
export class EditIntervencionComponent implements OnInit {


  documentos: Documento[] = [];

  ubigeo: Ubigeo[] = [];

  parametros: Parametros[] = [];


  documento: Documento = new Documento();
  constructor(
    private documentoService: DocumentoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.documentoService.listarUbi().subscribe(dato => {
      this.ubigeo = dato
      console.log(dato);
    }),

      this.documentoService.listarPar().subscribe(data => {
        this.parametros = data
        console.log(data);
      })
    this.route.params.subscribe(params => {
      const id = params['id']
      console.log(id);
      this.documentoService.IDdocumento(id).subscribe(data =>{
        this.documento = data
        console.log(data);

      })
      
    }
    )
  }


  Guardar() {
    console.log(this.documento)
    this.documentoService.crear(this.documento).subscribe((data) => {
      this.router.navigate(['/home/documento_intervencion'])
      console.log(data)
    })
  }
}