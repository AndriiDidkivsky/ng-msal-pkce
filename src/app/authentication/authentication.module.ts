import {ModuleWithProviders, NgModule, Provider} from '@angular/core';
import {MSAL_NG_CONFIG} from './tokens';
import {AuthGuard} from "./guard";
import {AuthService} from "./auth.service";
import {DEFAULT_NG_CONFIG, NgConfig} from './config';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {AuthInterceptor} from "./interceptor";

const providers: Provider[] = [
  {
    provide: HTTP_INTERCEPTORS,
    multi: true,
    useClass: AuthInterceptor
  },
  {
    provide: MSAL_NG_CONFIG,
    useValue: DEFAULT_NG_CONFIG
  },
  AuthGuard,
  AuthService,
];


@NgModule({
  imports: [],
  providers
})
export class AuthenticationModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AuthenticationModule,
      providers: [
        ...providers
      ]
    };
  }
}
