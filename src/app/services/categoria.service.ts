import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CategoriaModel } from '../models/producto-model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private categorias: CategoriaModel[] = [
    { id: 1, nombre: 'Entradas', descripcion: 'Entradas deliciosas', imagen: 'ruta-imagen-entradas.jpg' },
    { id: 2, nombre: 'Ceviches', descripcion: 'Frescos ceviches', imagen: 'ruta-imagen-ceviches.jpg' },
    // Puedes agregar más categorías...
  ];

  constructor() { }

  getCategorias(): Observable<CategoriaModel[]> {
    return of(this.categorias);
  }
}
