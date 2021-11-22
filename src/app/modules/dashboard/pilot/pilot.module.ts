import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PilotComponent } from './pilot.component';
import { SharedModule } from '../../../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';

const pilotRoutes: Routes = [
  {
    path: '',
    component: PilotComponent
  }
]

@NgModule({
  declarations: [
    PilotComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(pilotRoutes)
  ]
})
export class PilotModule { }
