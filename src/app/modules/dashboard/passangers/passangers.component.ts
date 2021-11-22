import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { User } from '../../../utils/general-interfaces';
import { ACTIONS } from '../../../utils/constants';
import { PassangersService } from './passangers.service';
import { MsgBoxService } from '../../../shared/msg-box/msg-box.service';
import { PassangersModalComponent } from './passangers-modal/passangers-modal.component';

export interface PassangerAction {
  action: ACTIONS;
  passanger: User;
}


@Component({
  selector: 'app-passangers',
  templateUrl: './passangers.component.html',
  styleUrls: ['./passangers.component.scss']
})
export class PassangersComponent implements OnInit {

  // Contant for list passanger
  passangerList!: User[];

  // Constant for status content
  contentReady = false;

  // Constante for actions
  public actions = ACTIONS; 

  // Constante for save user in session
  public user!: User;

  constructor(
    private _passangerService: PassangersService,
    private _msgBox: MsgBoxService,
    private _changeDetectorRef: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
    // Load passanger list
    this.loadPassangerList();
    // Save user in session
    const userInSession: any = localStorage.getItem('user');
    this.user = JSON.parse(userInSession);
  }

  /**
   * Method for load passanger list
   */
  public async loadPassangerList(): Promise<any> {
    this.contentReady = false;
    try {
      // Get passanger list
      const response = await this._passangerService.getPassangers();
      // If response is ok
      if (response.status) {
        // Set pilot list
        this.passangerList = response.data;
        this.contentReady = true;
      }
    } catch (error: any) {
      console.error(error);
      // Show error message
      this._msgBox.Snack(error.error.message, 'X')
    }
  }


  /**
   * Method for management of passangers
   */
  public async onManagementPassanger(data?: PassangerAction): Promise<any> {
    // Show modal
    const responseModal = await this._msgBox.Open(PassangersModalComponent, '500px', data);
    // If response is ok
    if (responseModal) {
      this.contentReady = false;
      // Get list of passangers
      await this.loadPassangerList();
    }
  }

  /**
   * Method for delete passanger
   * @param passanger
   */
  public async onDeletePassanger(passanger: User): Promise<any> {
    // Initialize try catch
    try {
      const response = await this._passangerService.deletePassanger(passanger._id);
      // If response is ok
      if (response.status) {
        this.contentReady = false;
        // Remove passanger from list
        await this.loadPassangerList();
        this._msgBox.Snack('Piloto eliminado con exito!!');
        // Update view
        this._changeDetectorRef.markForCheck();
      }
    } catch (error) {
      console.error(error);
    }
  }
}
