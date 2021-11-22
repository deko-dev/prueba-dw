import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RolesListComponent } from './roles-list.component';
import { SharedModule } from '../../../../shared/shared.module';

const rolesListRoutes: Routes = [
  {
    path: '',
    component: RolesListComponent
  }
]

@NgModule({
  declarations: [
    RolesListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(rolesListRoutes)
  ]
})
export class RolesListModule { }
