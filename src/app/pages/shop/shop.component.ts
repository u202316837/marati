import { Component } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { ProductoCatalogoModel } from '../../models/producto-model';
import { ItemComponent } from "../item/item.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [ItemComponent, CommonModule],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {
  productos: ProductoCatalogoModel[] = [];

  constructor(private productoService: ProductoService) {}

  ngOnInit() {
    this.productoService.getProductosCatalogo().subscribe(
      (data) => {
        this.productos = data;
        console.log(this.productos);
    })
  };
}
