/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';


@Injectable({
  providedIn: 'root',
})
export class MsgBoxService {

  constructor(private dialog: MatDialog, private snackBar: MatSnackBar) 
  {}

  /**
   * Method for open a modal dialog
   * @param modalComponent
   * @param width
   * @param data
   * @param panelClass
   * @returns
   */
  public Open( modalComponent: any, width: string = '600px', data?: any, panelClass?: any ): Promise<any> {
    return this.dialog.open(modalComponent, {
      width,
      data,
      panelClass,
    }).afterClosed().toPromise();
  }

  /**
   * Method for open a snackbar
   * @param message
   * @param action
   */
  public Snack(message: string, action: string = ''): Promise<any> {
    return this.snackBar.open(message, action, {
      duration: 4000,
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
    }).afterDismissed().toPromise();
  }
}
