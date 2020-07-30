import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {from, Observable} from 'rxjs';
import {AuthService} from './auth.service';
import {AuthenticationResult} from "@azure/msal-common";
import {mergeMap} from "rxjs/operators";
import {Injectable} from "@angular/core";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const scopes = this.auth.ngConfig.scopes;
    const account = this.auth.getAccount();
    if (!account || !scopes || !scopes.length) {
      return next.handle(req);
    }
    return from(
      this.auth.acquireTokenSilent({scopes, account})
        .then((response: AuthenticationResult) => {
          const token = response.accessToken;
          const authHeader = `Bearer ${token}`;
          return req.clone({
            setHeaders: {
              Authorization: authHeader,
            }
          });
        })
    ).pipe(
      mergeMap(nextReq => next.handle(nextReq)),
    );


  }
}
