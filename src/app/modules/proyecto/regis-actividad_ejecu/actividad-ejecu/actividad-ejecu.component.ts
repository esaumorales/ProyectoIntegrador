import { Component, OnInit } from '@angular/core';
import { ActividadEjecuService } from '../../services/actividad-ejecu.service';
import { Actividad_ejecu } from 'src/app/models/Actividad_ejecu';

@Component({
  selector: 'app-actividad-ejecu',
  templateUrl: './actividad-ejecu.component.html',
  styleUrls: ['./actividad-ejecu.component.css']
})
export class ActividadEjecuComponent implements OnInit {
  actividadejecu: Actividad_ejecu[] = [];

  constructor(
    private actividadejecuService: ActividadEjecuService
  ) { }

  ngOnInit(): void {
    this.actividadejecuService.listar().subscribe(data => {
      this.actividadejecu = data
      console.log(data)
    });
    ;
  }
}