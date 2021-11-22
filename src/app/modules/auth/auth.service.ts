import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /**
    * Authentication status
    */
  public isAuthenticated: boolean = false;
  /**
   * KeyName for access token.
   */
  private readonly accessTokenName = 'token';
  /**
   * KeyName for refresh token.
   */
  private readonly authenticationType = 'Bearer';


  constructor(
    private http: HttpClient,
    private router: Router
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

  /**
   * @name getAuthenticationType
   */
  public get getAuthenticationType(): string {
    return this.authenticationType;
  }

  /**Gets the access token  from LocalStorage
   *
   * @returns An access token
   */
  public get getAccessToken(): string {
    const token: any = localStorage.getItem(this.accessTokenName);
    return token;
  }
  /**
   * @name setAccessToken
   * @param accessToken access token to be saved
   */
  public setAccessToken(accessToken: string): void {
    localStorage.setItem(this.accessTokenName, accessToken);
  }
  /**
   * @name removeAccessToken
   * @type void
   * @description Remove access token from LocalStorage
   */
  public removeAccessToken(): void {
    localStorage.removeItem(this.accessTokenName);
  }
  
  /**Logout. Remove all user metadata and redirect to login page. */
  public logout() {
    // Remove access token from localStorage
    this.removeAccessToken();
    // Remove the expire time of local storage
    localStorage.removeItem('expire_in');
    // Remove data user of local storage
    localStorage.removeItem('user');
    this.router.navigateByUrl('/auth/sign-in');
  }
}
