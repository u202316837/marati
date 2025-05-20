import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  loading = false;
  error: string | null = null;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.loginForm = this.fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) return;
    this.loading = true;
    this.error = null;
    const { login, password } = this.loginForm.value;
    this.http.get<any>(`https://koo9h7kg4l.execute-api.us-east-1.amazonaws.com/v1/usuario?login=${login}&password=${password}`)
      .subscribe({
        next: (res) => {
          // Verifica la estructura de la respuesta y el rol
          if (res && res.data && Array.isArray(res.data) && res.data.length > 0) {
            const user = res.data[0];
            if (user.rol === 'Administrador') {
              this.router.navigate(['/admin/login']);
            } else {
              this.router.navigate(['/cliente/login']);
            }
          } else {
            this.error = 'Usuario o contraseña incorrectos';
          }
          this.loading = false;
        },
        error: () => {
          this.error = 'Error de conexión o credenciales incorrectas';
          this.loading = false;
        }
      });
  }
}
