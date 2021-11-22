/* eslint-disable @typescript-eslint/no-unused-expressions */
import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { AuthService } from '../../modules/auth/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    /** Authorization Header Name */
    private authHeaderName = 'Authorization';

    constructor(
        private _authService: AuthService
    ) { }

    // eslint-disable-next-line @typescript-eslint/member-ordering
    public intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        // Request copy
        let copyRequest = request;

        // eslint-disable-next-line prefer-const
        let headerValue: any = {};

        // If value exist on localStorage, use it
        if (this._authService.getAccessToken) {
            copyRequest = request.clone({ setHeaders: { authorization: `Bearer ${ this._authService.getAccessToken }` } });
        }

        
        return next.handle(copyRequest).pipe(
            tap(
                (event: HttpEvent<any>) => null,
                (error: any) => {
                    if (error instanceof HttpErrorResponse) {
                        error.status === 401 || error.status === 403 && this._authService.logout();
                    }
                }
            )
        );
    }
}
