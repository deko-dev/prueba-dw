import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassangersComponent } from './passangers.component';
import { PassangersModalComponent } from './passangers-modal/passangers-modal.component';
import { SharedModule } from '../../../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';

const passangersRoutes: Routes = [
  {
    path: '',
    component: PassangersComponent
  }
]

@NgModule({
  declarations: [
    PassangersComponent,
    PassangersModalComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(passangersRoutes)
  ]
})
export class PassangersModule { }
