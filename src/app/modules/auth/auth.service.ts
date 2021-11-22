import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
  ) { }


  /**
   * Method to login user
   * @param loginDataUser
   * @returns Promise<any>
   */
  public login(loginDataUser: any): Promise<any> {
    return this.http.post(
      `${environment.host}/api/users/login`, loginDataUser
    ).toPromise();
  }



}
