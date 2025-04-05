import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthServiceService } from '../../service/auth-service.service';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  registerForm: FormGroup;
  submitted = false;
  errorMessage = '';

  constructor(
    private readonly fb: FormBuilder,
    private readonly authService: AuthServiceService,
    private readonly router: Router
  ) {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  onRegister() {
    this.submitted = true;
    this.errorMessage = '';

    if (this.registerForm.invalid) return;

    const user: any = this.registerForm.value;
    this.authService.register(user).subscribe({
      next: () => {
        console.log('User registered successfully!');
        this.registerForm.reset();
        this.submitted = false;
        this.errorMessage = '';
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error('Registration failed:', err);
        this.submitted = false;
        this.errorMessage =
          err.error?.message || 'Something went wrong. Please try again.';
      },
    });
  }
}
