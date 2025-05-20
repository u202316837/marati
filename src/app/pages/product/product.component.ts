import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-product',
  imports: [ReactiveFormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
  encapsulation: ViewEncapsulation.None 
})
export class ProductComponent {
  constructor(
    private fb: FormBuilder
  ) {}

  myForm = this.fb.group({
    nombres: ['', Validators.required],
    correo: ['', [Validators.required, Validators.email]],
    comentarios: ['']
  });

  submit() {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
      alert('Su comentario ha sido enviado, sera validado para su publicacion');
    } else {
      alert('Por favor, complete los campos requeridos');
    }
  }

  ngAfterViewInit() {
    $('.set-bg').each(function () {
      var bg = $(this).data('setbg');
      $(this).css('background-image', 'url(' + bg + ')');
    });

    // Esperar a que el DOM esté completamente cargado
    setTimeout(() => {

    }, 500);
  }
}
