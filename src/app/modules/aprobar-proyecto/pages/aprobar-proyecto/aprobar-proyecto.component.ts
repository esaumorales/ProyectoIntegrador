import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-aprobar-proyecto',
  templateUrl: './aprobar-proyecto.component.html',
  styleUrls: ['./aprobar-proyecto.component.css']
})
export class AprobarProyectoComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit(): void {
  }

}
