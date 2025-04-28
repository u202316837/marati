import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProductoCatalogoModel } from '../models/producto-model'; // Corrige la ruta si tu modelo está en models/

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private productos: ProductoCatalogoModel[] = [
    { id: 1, categoria: 'Entradas', nombre: 'Causa Limeña', descripcion: 'Causa con atún.', valoracion: 4.5, precio: 25 },
    { id: 2, categoria: 'Ceviches', nombre: 'Ceviche Mixto', descripcion: 'Con pescado y mariscos.', valoracion: 4.8, precio: 35 },
    { id: 3, categoria: 'Entradas', nombre: 'Papa a la Huancaína', descripcion: 'Con salsa especial.', valoracion: 4.2, precio: 20 },
    { id: 4, categoria: 'Ceviches', nombre: 'Ceviche Clásico', descripcion: 'Pescado fresco en limón.', valoracion: 4.9, precio: 30 }
    // Agrega más productos si quieres
  ];

  constructor() {}

  // Obtener todos los productos
  getProductosCatalogo(): Observable<ProductoCatalogoModel[]> {
    return of(this.productos);
  }

  // Obtener productos ordenados por valoración (de mayor a menor)
  getProductosOrdenadosPorValoracion(): Observable<ProductoCatalogoModel[]> {
    const productosOrdenados = [...this.productos].sort((a, b) => b.valoracion - a.valoracion);
    return of(productosOrdenados);
  }

  // Obtener productos filtrados por categoría
  getProductosPorCategoria(categoria: string): Observable<ProductoCatalogoModel[]> {
    const productosFiltrados = this.productos.filter(p => p.categoria.toLowerCase() === categoria.toLowerCase());
    return of(productosFiltrados);
  }
}
