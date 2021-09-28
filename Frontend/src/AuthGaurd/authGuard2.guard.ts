import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';
import { AlertifyService } from '../services/alertify.service';

@Injectable({
  providedIn: 'root'
})
export class AuthgaurdGuard2 implements CanActivate {

  constructor(private authService: AuthService, private route: Router,
    private alertify: AlertifyService) { }



  canActivate(): boolean {
    if (this.authService.loginVendor()) {
      return true
    } else{
      this.alertify.error("Signin Vendor part First");
      this.route.navigate(['/vendorPanel'])
      return false
    }
  }
}
