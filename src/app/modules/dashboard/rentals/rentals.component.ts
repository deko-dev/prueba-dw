import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Rental } from 'src/app/utils/general-interfaces';
import { ACTIONS } from '../../../utils/constants';
import { User } from '../../../utils/general-interfaces';
import { RentalsService } from './rentals.service';
import { MsgBoxService } from '../../../shared/msg-box/msg-box.service';
import { RentalsModalComponent } from './rentals-modal/rentals-modal.component';

export interface RentalAction {
  action: ACTIONS;
  rental: Rental;
}

@Component({
  selector: 'app-rentals',
  templateUrl: './rentals.component.html',
  styleUrls: ['./rentals.component.scss']
})
export class RentalsComponent implements OnInit {

  
  // Contant for list pilot
  rentalList!: Rental[];

  // Constant for status content
  contentReady = false;

  // Constante for actions
  public actions = ACTIONS; 

  // Constante for save user in session
  public user!: User;

  // private _pilotService: PilotService,
  // private _passangerService: PassangersService,
  // private _aircraftService: AircraftsService,

  constructor(
    private _rentalService: RentalsService,
    private _msgBox: MsgBoxService,
    private _changeDetectorRef: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
    // Load rental list
    this.loadRentalList();
    // Save user in session
    const userInSession: any = localStorage.getItem('user');
    this.user = JSON.parse(userInSession);
  }

  /**
   * Method for load rental list
   */
  public async loadRentalList(): Promise<any> {
    this.contentReady = false;
    try {
      // Get rental list
      const response = await this._rentalService.getRentals();
      // If response is ok
      if (response.status) {
        // Set pilot list
        this.rentalList = response.data;
        this.contentReady = true;
      }
    } catch (error: any) {
      console.error(error);
      // Show error message
      this._msgBox.Snack(error.error.message, 'X')
    }
  }


  /**
   * Method for management of rentals
   */
  public async onManagementPilot(data?: RentalAction): Promise<any> {
    // Show modal
    const responseModal = await this._msgBox.Open(RentalsModalComponent, '500px', data);
    // If response is ok
    if (responseModal) {
      this.contentReady = false;
      // Get list of rentals
      await this.loadRentalList();
    }
  }
}
