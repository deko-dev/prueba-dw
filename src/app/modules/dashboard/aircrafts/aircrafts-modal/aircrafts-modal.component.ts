import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { User } from 'src/app/utils/general-interfaces';
import { PilotService } from '../../pilot/pilot.service';
import { MsgBoxService } from '../../../../shared/msg-box/msg-box.service';
import { AircraftsService } from '../aircrafts.service';
import { AircraftAction } from '../aircrafts.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ACTIONS } from 'src/app/utils/constants';

@Component({
  selector: 'app-aircrafts-modal',
  templateUrl: './aircrafts-modal.component.html',
  styleUrls: ['./aircrafts-modal.component.scss']
})
export class AircraftsModalComponent implements OnInit {

  // Constante for form
  aircraftForm!: FormGroup;

  // Constante for select pilots
  selectPilots: User[] = [];

  // Variable for text in button submit
  public textButtonSubmit: string = 'Crear Aeronave';

  // Variable for loading data
  loading: boolean = false;
  
  constructor(
    private fb: FormBuilder,
    private _msgBox: MsgBoxService,
    private _aircraftService: AircraftsService,
    private _pilotService: PilotService,
    @Inject(MAT_DIALOG_DATA) public data: AircraftAction,
    public _dialogRef: MatDialogRef<AircraftsModalComponent>
  ) { }

  ngOnInit(): void {
    // Init form
    this.initForm();
    // Validate data of parent
    this.validateData();
    // Load pilots
    this.loadSelectPilots();
  }


  /**
   * Method for init form
   */
  initForm() {
    this.aircraftForm = this.fb.group({
      code_ref: ['', Validators.required],
      name: ['', Validators.required],
      cant_passagers: ['', Validators.required],
      pilot_id: ['', Validators.required],

    });
  }

  /**
   * Method for get form field
   * 
   * @param field
   * @returns AbstractControl
   */
  public formField(field: any): AbstractControl | null {
    return this.aircraftForm.get(field);
  }

  /**
   * Method for create new aircraft
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
          _id: this.data.aircraft._id,
          ...this.aircraftForm.value
        }
        const response = await this._aircraftService.updateAircraft(dataSend);
        // If response is ok
        if (response.status) {
          this._msgBox.Snack('Aeronave actualizada con éxito', 'X');
          // Close modal
          this._dialogRef.close(true);
        }
      } else {
        // Send data for create
        const response = await this._aircraftService.createAircraft(
          {
            is_available: false,
            ...this.aircraftForm.value
          }
        );
        // If response is ok
        if (response.status) {
          this._msgBox.Snack('Aeronave creada con éxito', 'X');
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
        this.textButtonSubmit = 'Editar aeronave';
      }

      if (this.data.action === ACTIONS.PREVIEW) {
        // disable form
        this.aircraftForm.disable();
      }
      // Set form value
      this.aircraftForm.patchValue(this.data.aircraft);
    }
  }

  /**
   * Method for load pilots
   */
  public async loadSelectPilots(): Promise<any> {
    // Launch loading
    this.loading = true;
    // Fetch pilots
    const response = await this._pilotService.getPilots();
    // If response is ok
    if (response.status) {
      // Set pilots
      this.selectPilots = response.data; 
      // Stop loading
      this.loading = false;
    }
  }
}
