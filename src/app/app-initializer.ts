import {AuthService} from "./authentication/auth.service";
import {APP_INITIALIZER, Provider} from "@angular/core";

export function initializer(auth: AuthService) {
  return  () => auth.handleRedirect().catch(err => console.error(err));
}

export const AUTH_INIT_PROVIDER: Provider = {
  provide: APP_INITIALIZER,
  useFactory: initializer,
  deps: [AuthService],
  multi: true
}
