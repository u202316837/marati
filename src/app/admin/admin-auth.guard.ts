import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AdminAuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    // Aquí deberías comprobar si la sesión está activa (ejemplo con localStorage)
    const isLoggedIn = !!localStorage.getItem('admin_session');
    if (!isLoggedIn) {
      this.router.navigate(['/home']);
      return false;
    }
    return true;
  }
}
