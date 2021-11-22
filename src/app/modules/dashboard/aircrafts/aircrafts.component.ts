import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Aircraft } from 'src/app/utils/general-interfaces';
import { AircraftsService } from './aircrafts.service';
import { MsgBoxService } from '../../../shared/msg-box/msg-box.service';
import { AircraftsModalComponent } from './aircrafts-modal/aircrafts-modal.component';
import { ACTIONS } from 'src/app/utils/constants';

export interface AircraftAction {
  action: ACTIONS;
  aircraft: Aircraft;
}

@Component({
  selector: 'app-aircrafts',
  templateUrl: './aircrafts.component.html',
  styleUrls: ['./aircrafts.component.scss']
})
export class AircraftsComponent implements OnInit {

  // Constant for list of aircrafts
  aircrafts: Aircraft[] = [];

  // Constant for status content
  contentReady = false;

  // Constante for actions
  public actions = ACTIONS; 

  constructor(
    private _aircraftsService: AircraftsService,
    private _msgBox: MsgBoxService,
    private _changeDetectorRef: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
    // Get list of aircrafts
    this.getAircrafts();
  }


  /**
   * Method to get list of aircrafts
   */
  public async getAircrafts(): Promise<any> {
    // Get list of aircrafts
    const response = await this._aircraftsService.getAircrafts();
    this.aircrafts = response.data;
    this.contentReady = true;
  }

  /**
   * Method for management of aircrafts
   */
  public async onManagementAircrats(data?: AircraftAction): Promise<any> {
    // Show modal
    const responseModal = await this._msgBox.Open(AircraftsModalComponent, '500px', data);
    // If response is ok
    if (responseModal) {
      this.contentReady = false;
      // Get list of aircrafts
      await this.getAircrafts();
    }
  }

  /**
   * Method for delete aircraft
   * @param aircraft
   */
  public async onDeleteAircraft(aircraft: Aircraft): Promise<any> {
    // Initialize try catch
    try {
      const response = await this._aircraftsService.deleteAircraft(aircraft._id);
      // If response is ok
      if (response.status) {
        this.contentReady = false;
        // Remove aircraft from list
        await this.getAircrafts();
        this._msgBox.Snack('Aircraft eliminado con exito!!');
        // Update view
        this._changeDetectorRef.markForCheck();
      }
    } catch (error) {
      console.error(error);
    }
  }
}
