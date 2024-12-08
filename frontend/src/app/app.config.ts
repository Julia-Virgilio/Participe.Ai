import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideAuth0 } from '@auth0/auth0-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient(),
    provideAuth0({
      domain: 'dev-f1zzvbzr7emietli.us.auth0.com',
      clientId: 'CpKzLJ2sOFvnzXaRa0AotegNHxTbSpg1',
      authorizationParams: {
        redirect_uri: window.location.origin,
        audience: 'https://dev-f1zzvbzr7emietli.us.auth0.com/api/v2/',
        scope: 'openid profile email offline_access',
      },
      useRefreshTokens: true,
      cacheLocation: 'localstorage',
    }),
  ]
};
