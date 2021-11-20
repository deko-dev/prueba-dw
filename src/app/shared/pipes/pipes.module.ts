import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControlErrorPipe } from './form-control-error.pipe';



@NgModule({
  declarations: [
    FormControlErrorPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormControlErrorPipe
  ]
})
export class PipesModule { }
