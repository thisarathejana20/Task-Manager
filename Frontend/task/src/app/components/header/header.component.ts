import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthServiceService } from '../../service/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(
    private readonly authService: AuthServiceService,
    private readonly router: Router
  ) {}
  dropdownOpen = false;

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  logout() {
    this.authService.logout();
    this.toggleDropdown();
    this.router.navigate(['/root/login']);
  }
  isAuthenticated() {
    return this.authService.isLoggedIn();
  }
}
