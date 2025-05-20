/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { ScriptLoaderService } from './app/services/script-loader.service';
import 'jquery';
import $ from 'jquery';

(window as any).$ = $;
(window as any).jQuery = $;

const scriptLoader = new ScriptLoaderService();

// Lista de scripts desde /public/js/
const scripts = [
  'js/jquery.nice-select.min.js',
  'js/jquery.barfiller.js',
  'js/jquery.magnific-popup.min.js',
  'js/jquery.slicknav.js',
  'js/owl.carousel.min.js',
  'js/jquery.nicescroll.min.js',
  'js/main.js'
];

Promise.all(scripts.map(src => scriptLoader.loadScript(src)))
  .then(() => {
    console.log('✅ Todos los scripts fueron cargados correctamente.');
    return bootstrapApplication(AppComponent, appConfig);
  })
  .catch((err) => {
    console.error('❌ Error cargando los scripts:', err);
    return bootstrapApplication(AppComponent, appConfig);
  });
