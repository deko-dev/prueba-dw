import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ACTIONS } from '../../../../utils/constants';
import { MsgBoxService } from '../../../../shared/msg-box/msg-box.service';
import { PilotService } from '../pilot.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PilotAction } from '../pilot.component';

@Component({
  selector: 'app-pilot-modal',
  templateUrl: './pilot-modal.component.html',
  styleUrls: ['./pilot-modal.component.scss']
})
export class PilotModalComponent implements OnInit {

  // Constante for form
  pilotForm!: FormGroup;

  // Variable for text in button submit
  public textButtonSubmit: string = 'Crear Piloto';

  // Variable for loading data
  loading: boolean = false;

  // Constante for actions
  public actions = ACTIONS; 
  
  constructor(
    private fb: FormBuilder,
    private _msgBox: MsgBoxService,
    private _pilotService: PilotService,
    @Inject(MAT_DIALOG_DATA) public data: PilotAction,
    public _dialogRef: MatDialogRef<PilotModalComponent>
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
    this.pilotForm = this.fb.group({
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
    return this.pilotForm.get(field);
  }

  /**
   * Method for create new pilot
   * @param event: Event
   */
  public async onSubmit(event: Event) {
    // Prevent default action
    event.preventDefault();
    // Stop default action
    event.stopPropagation();

    try {
      // Send data for create
      if(this.data) {
        const dataSend = {
          _id: this.data.pilot._id,
          ...this.pilotForm.value
        }
        const response = await this._pilotService.updatePilot(dataSend);
        // If response is ok
        if (response.status) {
          this._msgBox.Snack('Piloto actualizado con éxito', 'X');
          // Close modal
          this._dialogRef.close(true);
        }
      } else {
        // Send data for create
        const response = await this._pilotService.createPilot(
          {
            rol: 'pilot',
            ...this.pilotForm.value
          }
        );
        // If response is ok
        if (response.status) {
          this._msgBox.Snack('Piloto creado con éxito', 'X');
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
        this.textButtonSubmit = 'Editar piloto';
      }

      if (this.data.action === ACTIONS.PREVIEW) {
        // disable form
        this.pilotForm.disable();
      }
      // Set form value
      this.pilotForm.patchValue(this.data.pilot);
    }
  }
}
