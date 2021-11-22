import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { User } from '../../../utils/general-interfaces';
import { PilotService } from './pilot.service';
import { MsgBoxService } from '../../../shared/msg-box/msg-box.service';
import { ACTIONS } from 'src/app/utils/constants';
import { PilotModalComponent } from './pilot-modal/pilot-modal.component';

export interface PilotAction {
  action: ACTIONS;
  pilot: User;
}


@Component({
  selector: 'app-pilot',
  templateUrl: './pilot.component.html',
  styleUrls: ['./pilot.component.scss']
})
export class PilotComponent implements OnInit {

  // Contant for list pilot
  pilotList!: User[];

  // Constant for status content
  contentReady = false;

  // Constante for actions
  public actions = ACTIONS; 

  // Constante for save user in session
  public user!: User;

  constructor(
    private _pilotService: PilotService,
    private _msgBox: MsgBoxService,
    private _changeDetectorRef: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
    // Load pilot list
    this.loadPilotList();
    // Save user in session
    const userInSession: any = localStorage.getItem('user');
    this.user = JSON.parse(userInSession);
  }

  /**
   * Method for load pilot list
   */
  public async loadPilotList(): Promise<any> {
    this.contentReady = false;
    try {
      // Get pilot list
      const response = await this._pilotService.getPilots();
      // If response is ok
      if (response.status) {
        // Set pilot list
        this.pilotList = response.data;
        this.contentReady = true;
      }
    } catch (error: any) {
      console.error(error);
      // Show error message
      this._msgBox.Snack(error.error.message, 'X')
    }
  }


  /**
   * Method for management of pilots
   */
  public async onManagementPilot(data?: PilotAction): Promise<any> {
    // Show modal
    const responseModal = await this._msgBox.Open(PilotModalComponent, '500px', data);
    // If response is ok
    if (responseModal) {
      this.contentReady = false;
      // Get list of pilots
      await this.loadPilotList();
    }
  }

  /**
   * Method for delete pilot
   * @param pilot
   */
  public async onDeletePilot(pilot: User): Promise<any> {
    // Initialize try catch
    try {
      const response = await this._pilotService.deletePilot(pilot._id);
      // If response is ok
      if (response.status) {
        this.contentReady = false;
        // Remove pilot from list
        await this.loadPilotList();
        this._msgBox.Snack('Piloto eliminado con exito!!');
        // Update view
        this._changeDetectorRef.markForCheck();
      }
    } catch (error) {
      console.error(error);
    }
  }
}
