import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScriptLoaderService {

  loadScript(scriptUrl: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const scriptElement = document.createElement('script');
      scriptElement.src = scriptUrl;
      scriptElement.onload = () => {
        console.log(`Script cargado: ${scriptUrl}`);
        resolve();
      };
      scriptElement.onerror = () => {
        console.error(`Error al cargar el script: ${scriptUrl}`);
        reject();
      };
      document.body.appendChild(scriptElement);
    });
  }
}
