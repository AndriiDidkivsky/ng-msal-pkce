import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './auth.service';
import {AuthError, InteractionRequiredAuthError, PopupRequest, RedirectRequest} from '@azure/msal-browser';
import {Injectable} from "@angular/core";

@Injectable()
export class AuthGuard implements CanActivate {
  get ngConfig() {
    return this.auth.ngConfig;
  }

  constructor(private auth: AuthService) {
  }

  private loginInteractive(request: RedirectRequest | PopupRequest) {
    if (this.ngConfig.popup) {
      return this.auth.loginPopup(request).then(() => true).catch(err => false)
    }
    return this.auth.loginRedirect(request).then(() => false);
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> | boolean {
    const account = this.auth.getAccount();
    const scopes = this.ngConfig.scopes;

    if (!account) {
      return this.loginInteractive({scopes});
    }

    return this.auth.acquireTokenSilent({scopes, account})
      .then(() => true)
      .catch((err: AuthError) => {
        if (err instanceof InteractionRequiredAuthError) {
          return this.loginInteractive({scopes})
        }
        throw err;
      });
  }
}
