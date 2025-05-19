/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import 'jquery';
import 'owl.carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import $ from 'jquery';

(window as any).$ = $;
(window as any).jQuery = $;

// Forzamos la carga
import 'owl.carousel';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
