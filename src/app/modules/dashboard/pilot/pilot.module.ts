import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PilotComponent } from './pilot.component';
import { SharedModule } from '../../../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { PilotModalComponent } from './pilot-modal/pilot-modal.component';

const pilotRoutes: Routes = [
  {
    path: '',
    component: PilotComponent
  }
]

@NgModule({
  declarations: [
    PilotComponent,
    PilotModalComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(pilotRoutes)
  ]
})
export class PilotModule { }
