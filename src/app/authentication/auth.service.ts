import {Inject, Injectable} from '@angular/core';
import {Configuration, PublicClientApplication} from '@azure/msal-browser';
import {MSAL_CONFIG, MSAL_NG_CONFIG} from './tokens';
import {NgConfig} from './config';
import {RedirectRequest} from '@azure/msal-browser/dist/src/request/RedirectRequest';
import {PopupRequest} from '@azure/msal-browser/dist/src/request/PopupRequest';
import {EndSessionRequest} from '@azure/msal-common';
import {SilentRequest} from '@azure/msal-browser/dist/src/request/SilentRequest';

@Injectable()
export class AuthService {
  private msal: PublicClientApplication;

  constructor(
    @Inject(MSAL_CONFIG) public msalConfig: Configuration,
    @Inject(MSAL_NG_CONFIG) public ngConfig: NgConfig
  ) {
    this.msal = new PublicClientApplication(msalConfig);
  }

  handleRedirect() {
    return this.msal.handleRedirectPromise().then(res => {
      console.log(res);
    })
  }
  loginRedirect(request: RedirectRequest) {
    return this.msal.loginRedirect(request);
  }

  loginPopup(request: PopupRequest) {
    return this.msal.loginPopup(request);
  }

  logout(logoutRequest?: EndSessionRequest) {
    return this.msal.logout(logoutRequest);
  }

  acquireTokenSilent(request: SilentRequest) {
    return this.msal.acquireTokenSilent(request);
  }

  acquireTokenPopup(request: PopupRequest) {
    return this.msal.acquireTokenPopup(request);
  }

  acquireTokenRedirect(request: RedirectRequest) {
    return this.msal.acquireTokenRedirect(request);
  }

  getAccount() {
    const accounts = this.msal.getAllAccounts();
    if (!accounts || !accounts.length) {
      return null;
    }
    return accounts[0];
  }
}
