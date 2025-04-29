import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  imports: [ReactiveFormsModule],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})
export class ContactusComponent {
  constructor(
    private fb: FormBuilder
  ) {}

  myForm = this.fb.group({
    nombres: ['', Validators.required],
    apellido_paterno: ['', Validators.required],
    apellido_materno: [''],
    documento_identidad: ['', Validators.required],
    correo: ['', [Validators.required, Validators.email]],
    comentarios: ['']
  });

  submit() {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
      alert('Formulario enviado');
    } else {
      alert('Por favor, complete los campos requeridos');
    }
  }
}
