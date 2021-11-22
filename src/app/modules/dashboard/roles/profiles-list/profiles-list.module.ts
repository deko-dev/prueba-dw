import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilesListComponent } from './profiles-list.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../../../shared/shared.module';

const profilesListRoutes: Routes = [ 
  {
    path: '',
    component: ProfilesListComponent
  }
]

@NgModule({
  declarations: [
    ProfilesListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(profilesListRoutes),
    SharedModule
  ]
})
export class ProfilesListModule { }
