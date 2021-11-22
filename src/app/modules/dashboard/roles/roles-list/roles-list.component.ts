import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/utils/general-interfaces';
import { RolesList } from '../../../../utils/roles_&_perfiles/data';


@Component({
  selector: 'app-roles-list',
  templateUrl: './roles-list.component.html',
  styleUrls: ['./roles-list.component.scss']
})
export class RolesListComponent implements OnInit {
    
  displayedColumns: string[] = ['id', 'name', 'description', 'profile'];
  dataSource: Role[] = RolesList;

  constructor() { }

  ngOnInit(): void {
  }

}
