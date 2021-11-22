import { Component, OnInit } from '@angular/core';
import { Profile } from '../../../../utils/general-interfaces';
import { ProfilesList } from '../../../../utils/roles_&_perfiles/data';

@Component({
  selector: 'app-profiles-list',
  templateUrl: './profiles-list.component.html',
  styleUrls: ['./profiles-list.component.scss']
})
export class ProfilesListComponent implements OnInit {

  // Columns for table
  displayedColumns: string[] = ['id', 'name', 'description', 'modules'];
  // Data for table
  dataSource: Profile[] = ProfilesList;

  constructor() { }

  ngOnInit(): void {
  }

}
