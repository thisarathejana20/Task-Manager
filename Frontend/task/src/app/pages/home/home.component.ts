import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private readonly router: Router) {}

  navigateToSignup() {
    this.router.navigate(['/root/register']); // Change to your signup route
  }

  navigateToLogin() {
    this.router.navigate(['/root/login']); // Change to your login route
  }
}
