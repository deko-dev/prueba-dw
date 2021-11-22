import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RentalsComponent } from './rentals.component';
import { RentalsModalComponent } from './rentals-modal/rentals-modal.component';
import { SharedModule } from '../../../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';

const rentalsRoutes: Routes = [
  {
    path: '',
    component: RentalsComponent
  }
]

@NgModule({
  declarations: [
    RentalsComponent,
    RentalsModalComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(rentalsRoutes)
  ]
})
export class RentalsModule { }
