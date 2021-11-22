import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MsgBoxService } from './msg-box.service';



@NgModule({
  providers: [
    MsgBoxService
  ],
  declarations: [],
  imports: [
    CommonModule,
    MatDialogModule,
    MatSnackBarModule
  ]
})
export class MsgBoxModule { }
