import { ApplicationConfig } from '@angular/core';
import { authInterceptor } from './interceptors/auth-interceptor';
import { loadingInterceptor } from './interceptors/loading-interceptor';
import { errorHandlerInterceptor } from './interceptors/error-handler-interceptor';
import { provideRouter } from '@angular/router';

import {
  provideHttpClient,
  withInterceptors
} from '@angular/common/http';

import { routes } from './app.routes';


export const appConfig: ApplicationConfig = {

  providers: [

    provideRouter(routes),

    provideHttpClient(

  withInterceptors([

    authInterceptor,

    errorHandlerInterceptor,

    loadingInterceptor

  ])

)
  ]

};