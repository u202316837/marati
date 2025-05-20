import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router: Router) {}

  ngOnInit() {
    // Si no hay sesión activa, redirige a home
    if (!localStorage.getItem('admin_session')) {
      this.router.navigate(['/home']);
    }
  }

  logout() {
    // Limpia la sesión y redirige
    localStorage.removeItem('admin_session');
    this.router.navigate(['/auth/login']);
  }
}
