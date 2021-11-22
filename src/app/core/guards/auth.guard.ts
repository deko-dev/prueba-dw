/* eslint-disable prefer-const */
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from '../../modules/auth/auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
    /**
     * Constructor
     */
    constructor(
        private _authService: AuthService,
        private _router: Router,
    ) {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Can activate
     *
     * @param route
     * @param state
     */
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this._check(route.url[0].path);
    }

    /**
     * Can activate child
     *
     * @param childRoute
     * @param state
     */
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        const redirectUrl = state.url === '/sign-out' ? '/' : state.url;
        return this._check(redirectUrl);
    }

    /**
     * Can load
     *
     * @param route
     * @param segments
     */
    canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
        return this._check('/');
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Check the authenticated status
     *
     * @param path
     * @private
     */
    private _check(path: any): Promise<boolean> {

        // Create a Promise of returns
        return new Promise(async (resolve) => {
          console.log(path);
          // Validate if exists a token
          if(localStorage.getItem('token')) {
            // Get expiration date
            const expirationDate: any = localStorage.getItem('expire_in');
            // Save the boolean response of validating expiration of the token
            const isTokenExpired = parseInt(expirationDate) <= Date.now();
            // Validate if the token is expired
            if(isTokenExpired) {
              // Remove the token
              localStorage.removeItem('token');
              // Redirect to the sign-in page
              this._router.navigateByUrl('/auth/sign-in');
            }else {
              // Validate if path is not the sign-in page
              if(path !== 'auth') {
                resolve(true);
              } else {
                this._router.navigateByUrl('/dashboard');
              }
            }
          }else{
            if(path !== 'auth') {
              this._router.navigateByUrl('/auth/sign-in');
            } else {
              resolve(true);
            }
          }
        });
    }
}
