import { Component  } from '@angular/core';
import { CategoriaService } from '../../services/categoria.service';
import { ActivatedRoute, Params } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';



@Component({
  selector: 'app-category',
  imports: [NgIf, NgFor],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  constructor(
    private readonly cs: CategoriaService,
    private ar: ActivatedRoute
  ) {}

  categoria: any = [];

  __obtener_categoria(id: any) {
    this.cs.obtenerCategoria(id).subscribe((res: any) => {
      if (res && res.data && res.data.length > 0) {
        this.categoria = res.data[0];
        console.log(this.categoria);

        // Activar imágenes de fondo tipo set-bg
        setTimeout(() => {
          $('.set-bg').each(function () {
            const bg = $(this).data('setbg');
            $(this).css('background-image', 'url(' + bg + ')');
          });
        }, 100);
      }
    });
  }

  ngOnInit(): void {
    this.ar.params.subscribe((params: Params) => {
      if (params['id']) {
        this.__obtener_categoria(params['id']);
      }
    });
  }
}
