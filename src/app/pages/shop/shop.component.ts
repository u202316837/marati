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
  ngAfterViewInit() {
    $('.set-bg').each(function () {
      var bg = $(this).data('setbg');
      $(this).css('background-image', 'url(' + bg + ')');
    });

    // Esperar a que el DOM esté completamente cargado
    setTimeout(() => {
      console.log("Inicializando OwlCarousel...");
      if (typeof $.fn.owlCarousel === 'function') {
        $(".hero__slider").owlCarousel({
          loop: true,
          margin: 0,
          items: 1,
          dots: false,
          nav: true,
          navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
          animateOut: 'fadeOut',
          animateIn: 'fadeIn',
          smartSpeed: 1200,
          autoHeight: false,
          autoplay: false
        });
      } else {
        console.error("🚨 OwlCarousel no se inicializó.");
      }
      // ✅ Inicializar también categories__slider
      if ($('.categories__slider').length && typeof $.fn.owlCarousel === 'function') {
        $('.categories__slider').owlCarousel({
          loop: true,
          margin: 10,
          items: 4,
          dots: true,
          nav: true,
          navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
          smartSpeed: 600,
          responsive: {
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 4 }
          }
        });
      }
      // ✅ Activar menú lateral canvas
      $('.canvas__open').on('click', function () {
        $('.offcanvas-menu-wrapper').addClass('active');
      });

      $('.canvas__close').on('click', function () {
        $('.offcanvas-menu-wrapper').removeClass('active');
      });
    }, 500);
  }
}
