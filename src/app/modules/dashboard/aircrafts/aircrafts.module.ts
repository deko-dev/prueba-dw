import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AircraftsComponent } from './aircrafts.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { AircraftsModalComponent } from './aircrafts-modal/aircrafts-modal.component';

const aircraftsRoutes: Routes = [
  {
    path: '',
    component: AircraftsComponent
  }
]

@NgModule({
  declarations: [
    AircraftsComponent,
    AircraftsModalComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(aircraftsRoutes)
  ]
})
export class AircraftsModule { }
