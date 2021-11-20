import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

const authRoutes: Routes = [
  {
    path: '',
    component: SignInComponent
  }
]

@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(authRoutes)
  ]
})
export class AuthModule { }
