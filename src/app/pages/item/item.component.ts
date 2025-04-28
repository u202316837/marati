import { Component, Input } from '@angular/core';
import { ProductoCatalogoModel } from '../../models/producto-model';

@Component({
  selector: 'app-item',
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  @Input() producto: ProductoCatalogoModel = {
    id: 0, // ID del producto
    categoria: '', // Categoría del producto
    nombre: '', // Nombre del producto
    descripcion: '', // Descripción del producto
    valoracion: 0, // Valoración del producto
    precio: 0, // Precio del producto
    imagen: '' // URL de la imagen del producto (opcional)
  }; 
}
