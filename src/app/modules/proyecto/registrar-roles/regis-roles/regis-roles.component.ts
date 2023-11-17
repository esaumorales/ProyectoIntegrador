import { Component, OnInit } from '@angular/core';
import { Roles } from 'src/app/models/Roles';
import { RegisRolesService } from '../../services/regis-roles.service';

@Component({
  selector: 'app-regis-roles',
  templateUrl: './regis-roles.component.html',
  styleUrls: ['./regis-roles.component.css']
})
export class RegisRolesComponent implements OnInit {
  roles: Roles[] = [];

  constructor(
    private regisrolesService: RegisRolesService
  ) { }

  ngOnInit(): void {
    this.regisrolesService.listar().subscribe(data => {
      this.roles = data
      console.log(data)
    });
    ;
  }
}
