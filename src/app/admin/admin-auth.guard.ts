import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AdminAuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    // comprobar si la sesión está activa
    const isLoggedIn = !!localStorage.getItem('admin_session');
    if (!isLoggedIn) {
      this.router.navigate(['/home']);
      return false;
    }
    return true;
  }
}
