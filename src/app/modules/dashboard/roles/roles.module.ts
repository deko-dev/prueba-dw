import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolesComponent } from './roles.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';

const rolesRoutes: Routes = [
  {
    path: '',
    component: RolesComponent,
  },
  {
    path: 'roles-list',
    loadChildren: () => import('./roles-list/roles-list.module').then(m => m.RolesListModule),
  },
  {
    path: 'profiles-list',
    loadChildren: () => import('./profiles-list/profiles-list.module').then(m => m.ProfilesListModule),
  }
]


@NgModule({
  declarations: [
    RolesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(rolesRoutes),
    SharedModule
  ]
})
export class RolesModule { }
