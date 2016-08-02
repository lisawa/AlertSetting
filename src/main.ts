import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { AppComponent, environment } from './app/';
import { AppRouterProviders } from'./app/app.routes';
//import { ActionRouterProviders } from './app/action/action.route';

if (environment.production) {
  enableProdMode();
}

bootstrap(
  AppComponent, 
  [
    HTTP_PROVIDERS,
    AppRouterProviders,
  ]
);
