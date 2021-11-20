import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModules } from './material/index';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MaterialModules
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,

    // Material
    MaterialModules,
  ]
})
export class SharedModule { }
