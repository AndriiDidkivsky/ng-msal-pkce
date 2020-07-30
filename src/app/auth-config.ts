import {Configuration} from "@azure/msal-browser";
import {NgConfig} from "./authentication/config";
import {MSAL_CONFIG, MSAL_NG_CONFIG} from "./authentication/tokens";

const MSAL_CFG: Configuration = {
  auth: {
    authority: ``, // your authority for example https://login.microsoftonline.com/your_tenant.
    clientId: '', // your client id
    redirectUri: 'http://localhost:3000',
    navigateToLoginRequestUrl: true,
  },
  cache: {
    storeAuthStateInCookie: false,
    cacheLocation: 'localStorage'
  },
}
const NG_CFG: NgConfig = {
  popup: true, // popup or redirect flow
  scopes: ['profile', 'openid', 'User.Read'] // add your scopes
}


export const NG_CFG_PROVIDER = {
  provide: MSAL_CONFIG,
  useValue: MSAL_CFG
};

export const MSAL_CFG_PROVIDER = {
  provide: MSAL_NG_CONFIG,
  useValue: NG_CFG
};
