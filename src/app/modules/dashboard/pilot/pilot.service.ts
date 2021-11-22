import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ResponseData, User } from '../../../utils/general-interfaces';

@Injectable({
  providedIn: 'root'
})
export class PilotService {

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Method for get all pilots
   */
  public getPilots(): Promise<ResponseData<User[]>> {
    return this.http.get<ResponseData<User[]>>(
      `${environment.host}/api/users/pilot`
    ).toPromise();
  }

}
