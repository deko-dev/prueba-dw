import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ACTIONS } from '../../../../utils/constants';
import { MsgBoxService } from '../../../../shared/msg-box/msg-box.service';
import { PassangersService } from '../passangers.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PassangerAction } from '../passangers.component';

@Component({
  selector: 'app-passangers-modal',
  templateUrl: './passangers-modal.component.html',
  styleUrls: ['./passangers-modal.component.scss']
})
export class PassangersModalComponent implements OnInit {

  // Constante for form
  passangerForm!: FormGroup;

  // Variable for text in button submit
  public textButtonSubmit: string = 'Crear Pasajero';

  // Variable for loading data
  loading: boolean = false;

  // Constante for actions
  public actions = ACTIONS;

  constructor(
    private fb: FormBuilder,
    private _msgBox: MsgBoxService,
    private _passangerService: PassangersService,
    @Inject(MAT_DIALOG_DATA) public data: PassangerAction,
    public _dialogRef: MatDialogRef<PassangersModalComponent>
  ) { }

  ngOnInit(): void {
    // Init form
    this.initForm();
    // Validate data of parent
    this.validateData();
  }


  /**
   * Method for init form
   */
  initForm() {
    this.passangerForm = this.fb.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required],
    });
  }

  /**
   * Method for get form field
   * 
   * @param field
   * @returns AbstractControl
   */
  public formField(field: any): AbstractControl | null {
    return this.passangerForm.get(field);
  }

  /**
   * Method for create new passanger
   * @param event: Event
   */
  public async onSubmit(event: Event) {
    // Prevent default action
    event.preventDefault();
    // Stop default action
    event.stopPropagation();

    try {
      // Send data for create
      if (this.data) {
        const dataSend = {
          _id: this.data.passanger._id,
          ...this.passangerForm.value
        }
        const response = await this._passangerService.updatePassanger(dataSend);
        // If response is ok
        if (response.status) {
          this._msgBox.Snack('Pasajero actualizado con éxito', 'X');
          // Close modal
          this._dialogRef.close(true);
        }
      } else {
        // Send data for create
        const response = await this._passangerService.createPassanger(
          {
            rol: 'passenger',
            ...this.passangerForm.value
          }
        );
        // If response is ok
        if (response.status) {
          this._msgBox.Snack('Pasajero creado con éxito', 'X');
          // Close modal
          this._dialogRef.close(true);
        }
      }
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Method for validate data of parent
   */
  public validateData(): void {
    // If exist data
    if (this.data) {
      // If action is edit
      if (this.data.action === ACTIONS.UPDATE) {
        // rename button
        this.textButtonSubmit = 'Editar pasajero';
      }

      if (this.data.action === ACTIONS.PREVIEW) {
        // disable form
        this.passangerForm.disable();
      }
      // Set form value
      this.passangerForm.patchValue(this.data.passanger);
    }
  }
}
