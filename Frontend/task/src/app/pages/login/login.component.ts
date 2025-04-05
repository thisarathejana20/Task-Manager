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
import swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm: FormGroup;
  submitted = false;

  constructor(
    private readonly fb: FormBuilder,
    private readonly AuthService: AuthServiceService,
    private readonly router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onLogin() {
    this.submitted = true;
    if (this.loginForm.invalid) return;

    const user = this.loginForm.value;
    this.AuthService.login(user).subscribe({
      next: (res) => {
        console.log('Login successful!');
        this.loginForm.reset();
        this.submitted = false;
        res.hasOwnProperty('token') && this.AuthService.setToken(res.token);
        swal.fire({
          title: 'Login Successful',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500,
        });
        this.router.navigate(['/root/tasks']);
      },
      error: (err) => {
        console.error('Login failed:', err);
        this.submitted = false;
        swal.fire({
          title: 'Login Failed',
          icon: 'error',
          showConfirmButton: false,
          timer: 1500,
        });
      },
    });
  }
}
