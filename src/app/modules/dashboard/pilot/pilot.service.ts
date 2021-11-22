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


  /**
   * Method for getting pilot by id
   * @param id
   * @returns Promise<ResponseData<User>>
   */
  public getPilot(id: string): Promise<ResponseData<User>> {
    return this.http.get<ResponseData<User>>(
      `${environment.host}/api/users/pilot/${id}`
    ).toPromise();
  }

  /**
   * Method for creating new pilot
   * @param User
   * @returns Promise<ResponseData<User>>
   */
  public createPilot(User: User): Promise<ResponseData<User>> {
    return this.http.post<ResponseData<User>>(
      `${environment.host}/api/users/pilot`,
      User
    ).toPromise();
  }

  /**
   * Method for updating pilot
   * @param User
   * @returns Promise<ResponseData<User>>
   */
  public updatePilot(User: User): Promise<ResponseData<User>> {
    return this.http.put<ResponseData<User>>(
      `${environment.host}/api/users/pilot/${User._id}`,
      User
    ).toPromise();
  }

  /**
   * Method for deleting pilot
   * @param id
   * @returns Promise<ResponseData<User>>
   */
  public deletePilot(id: string): Promise<ResponseData<User>> {
    return this.http.delete<ResponseData<User>>(
      `${environment.host}/api/users/pilot/${id}`
    ).toPromise();
  }

}
