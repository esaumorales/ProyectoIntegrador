import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/models/Proyecto';
import { CoordinadorService } from '../../services/coordinador.service';
import { Coordinador } from 'src/app/models/Coordinador';
import { ProyectoService } from '../../services/proyecto.service';
import { Router } from '@angular/router';
import { TipProyecService } from '../../services/tip-proyec.service';
import { Tip_proyec } from 'src/app/models/Tip_proyect';
import { Modalidad } from 'src/app/models/Modalidad';
import { ModalidadService } from '../../services/modalidad.service';
import { Documento } from 'src/app/models/documento';
import { DocumentoService } from '../../services/documento.service';
import { Escu_prof } from 'src/app/models/Escu_prof';
import { EscuelaService } from '../../services/escuela.service';
import { Parametros } from 'src/app/models/Parametros';
import { ParametrosService } from '../../services/parametros.service';
import { Ciclo } from 'src/app/models/Ciclo';
import { CicloService } from '../../services/ciclo.service';

@Component({
  selector: 'app-proyecto-registrar',
  templateUrl: './proyecto-registrar.component.html',
  styleUrls: ['./proyecto-registrar.component.css']
})
export class ProyectoRegistrarComponent implements OnInit {
  proyecto: Proyecto = new Proyecto();
  coordinador: Coordinador[] = [];
  tipproyec: Tip_proyec[]=[];
  modalidad: Modalidad[]=[];
  documento: Documento[]=[];
  escuprof: Escu_prof[]=[];
  parametros: Parametros[]=[];
  ciclo: Ciclo[]=[];
  constructor(
    private proyectoService: ProyectoService,
    private coordinadorService: CoordinadorService,
    private tipproyecService: TipProyecService,
    private modalidadService: ModalidadService,
    private documentoService: DocumentoService,
    private escuelaService: EscuelaService,
    private parametrosService: ParametrosService,
    private cicloService: CicloService,
    private router: Router,
  ) { }
  ngOnInit(): void {
    this.ListarCoordinador()
    this.ListarTip_proyec()
    this.ListarModalidad() 
    this.ListarDocumento()
    this.ListarEscuela()
    this.ListarParametros()
    this.ListarCiclo()
  }
  onSubmit() {
    this.createTutorial();
  }
  ListarCoordinador() {
    this.coordinadorService.listar().subscribe(data => {
      this.coordinador = data;  
    });
  }
  ListarTip_proyec() {
    this.tipproyecService.listar().subscribe(data => {
      this.tipproyec = data;  
    });
  }
  ListarModalidad() {
    this.modalidadService.listar().subscribe(data => {
      this.modalidad = data;  
    });
  }
  ListarDocumento() {
    this.documentoService.listar().subscribe(data => {
      this.documento = data;  
    });
  }
  ListarEscuela() {
    this.escuelaService.listar().subscribe(data => {
      this.escuprof = data;  
    });
  }
  ListarParametros() {
    this.parametrosService.listar().subscribe(data => {
      this.parametros = data;  
    });
  }
  ListarCiclo() {
    this.cicloService.listar().subscribe(data => {
      this.ciclo = data;  
    });
  }
  createTutorial() {
    this.proyectoService.crear(this.proyecto).subscribe(data => {
      console.log(data);
      this.irProyecto();
    });
  }
  irProyecto(){
    this.router.navigate(["/home/proyecto"]);
  }

}
