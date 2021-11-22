import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseData, User } from '../../../utils/general-interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PassangersService {

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Method for get all passangers
   */
  public getPassangers(): Promise<ResponseData<User[]>> {
    return this.http.get<ResponseData<User[]>>(
      `${environment.host}/api/users/passenger`
    ).toPromise();
  }


  /**
   * Method for getting passanger by id
   * @param id
   * @returns Promise<ResponseData<User>>
   */
  public getPassanger(id: string): Promise<ResponseData<User>> {
    return this.http.get<ResponseData<User>>(
      `${environment.host}/api/users/passenger/${id}`
    ).toPromise();
  }

  /**
   * Method for creating new passenger
   * @param User
   * @returns Promise<ResponseData<User>>
   */
  public createPassanger(User: User): Promise<ResponseData<User>> {
    return this.http.post<ResponseData<User>>(
      `${environment.host}/api/users/passenger`,
      User
    ).toPromise();
  }

  /**
   * Method for updating passanger
   * @param passanger
   * @returns Promise<ResponseData<User>>
   */
  public updatePassanger(passanger: User): Promise<ResponseData<User>> {
    return this.http.put<ResponseData<User>>(
      `${environment.host}/api/users/passenger/${passanger._id}`,
      passanger
    ).toPromise();
  }

  /**
   * Method for deleting passanger
   * @param id
   * @returns Promise<ResponseData<User>>
   */
  public deletePassanger(id: string): Promise<ResponseData<User>> {
    return this.http.delete<ResponseData<User>>(
      `${environment.host}/api/users/passenger/${id}`
    ).toPromise();
  }
}
