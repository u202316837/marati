import { Component, AfterViewInit } from '@angular/core';
import $ from 'jquery';

declare global {
  interface JQuery {
    owlCarousel(options?: any): JQuery;
  }
}

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
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
        console.error("🚨 OwlCarousel no se inicializó. Revisa el script de carga.");
      }
    }, 500);
  }
}
