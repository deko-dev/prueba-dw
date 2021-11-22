import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModules } from './material/index';
import { PipesModule } from './pipes/pipes.module';
import { MsgBoxModule } from './msg-box/msg-box.module';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,

    // Material
    MaterialModules,

    // Pipes
    PipesModule,

    // MsgBoxService
    MsgBoxModule,
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,

    // Material
    MaterialModules,

    // Pipes
    PipesModule,

    // MsgBoxService
    MsgBoxModule,
  ]
})
export class SharedModule { }
