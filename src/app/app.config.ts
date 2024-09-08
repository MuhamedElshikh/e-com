import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, RouterModule, withInMemoryScrolling, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideToastr, ToastrModule } from 'ngx-toastr';
import { headersInterceptor } from './shared/interceptor/headers.interceptor';
import { NgxSpinnerModule } from 'ngx-spinner';
import { loaderInterceptor } from './shared/interceptor/loader.interceptor';
import { errInterceptor } from './shared/interceptor/err.interceptor';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withViewTransitions(),withInMemoryScrolling({scrollPositionRestoration:'top'})),
    provideToastr(),
    provideClientHydration(),
    provideHttpClient(withFetch(), withInterceptors([headersInterceptor,loaderInterceptor,errInterceptor])),
    importProvidersFrom(
      RouterModule,
      BrowserAnimationsModule,
      ToastrModule,
      NgxSpinnerModule.forRoot()
    ), provideAnimationsAsync(),
  ],
};
