import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { User, Aircraft } from '../../../../utils/general-interfaces';
import { ACTIONS } from '../../../../utils/constants';
import { MsgBoxService } from '../../../../shared/msg-box/msg-box.service';
import { AircraftsService } from '../../aircrafts/aircrafts.service';
import { PilotService } from '../../pilot/pilot.service';
import { PassangersService } from '../../passangers/passangers.service';
import { RentalsService } from '../rentals.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RentalAction } from '../rentals.component';

@Component({
  selector: 'app-rentals-modal',
  templateUrl: './rentals-modal.component.html',
  styleUrls: ['./rentals-modal.component.scss']
})
export class RentalsModalComponent implements OnInit {

  // Constante for form
  rentalForm!: FormGroup;

  // Constante for select pilots
  selectPilots: User[] = [];

  // Constante for select passangers
  selectPassangers: User[] = [];

  // Constante for select aircrafts
  selectAircrafts: Aircraft[] = [];
  
  // Variable for text in button submit
  public textButtonSubmit: string = 'Crear Alquiler';

  // Variable for loading data
  loading: boolean = false;

  // Constante for actions
  public actions = ACTIONS; 
  
  constructor(
    private fb: FormBuilder,
    private _msgBox: MsgBoxService,
    private _rentalService: RentalsService,
    private _aircraftService: AircraftsService,
    private _pilotService: PilotService,
    private _passangerService: PassangersService,
    @Inject(MAT_DIALOG_DATA) public data: RentalAction,
    public _dialogRef: MatDialogRef<RentalsModalComponent>
  ) { }

  ngOnInit(): void {
    // Init form
    this.initForm();
    // Validate data of parent
    this.validateData();
    // Load aircrafts
    this.loadSelectAircrafts();
    // Load pilots
    this.loadSelectPilots();
    // Load passangers
    this.loadSelectPassangers();
  }


  /**
   * Method for init form
   */
  initForm() {
    this.rentalForm = this.fb.group({
      location: ['', Validators.required],
      arrival_date: ['', Validators.required],
      departure_date: ['', Validators.required],
      aircraft_id: ['', Validators.required],
      pilot_id: ['', Validators.required],
      passenger_ids: [''],

    });
  }

  /**
   * Method for get form field
   * 
   * @param field
   * @returns AbstractControl
   */
  public formField(field: any): AbstractControl | null {
    return this.rentalForm.get(field);
  }

  /**
   * Method for create new rental
   * @param event: Event
   */
  public async onSubmit(event: Event) {
    // Prevent default action
    event.preventDefault();
    // Stop default action
    event.stopPropagation();

    try {
      // Send data for create
      const response = await this._rentalService.createRental(
        {
          is_available: false,
          ...this.rentalForm.value
        }
      );
      // If response is ok
      if (response.status) {
        this._msgBox.Snack('Alquiler creado con éxito', 'X');
        // Close modal
        this._dialogRef.close(true);
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
      if (this.data.action === ACTIONS.PREVIEW) {
        // disable form
        this.rentalForm.disable();
      }
      // Set form value
      this.rentalForm.patchValue(this.data.rental);
    }
  }

  /**
   * Method for load pilots
   */
  public async loadSelectAircrafts(): Promise<any> {
    // Launch loading
    this.loading = true;
    // Fetch aircrafts
    const response = await this._aircraftService.getAircrafts();
    // If response is ok
    if (response.status) {
      // Set pilots
      this.selectAircrafts = response.data; 
      // Stop loading
      this.loading = false;
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

  /**
   * Method for load passangers
   */
  public async loadSelectPassangers(): Promise<any> {
    // Launch loading
    this.loading = true;
    // Fetch passangers
    const response = await this._passangerService.getPassangers();
    // If response is ok
    if (response.status) {
      // Set pilots
      this.selectPassangers = response.data; 
      // Stop loading
      this.loading = false;
    }
  }
}
