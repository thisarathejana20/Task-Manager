import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/AuthRequest';
import { AuthResponse } from '../models/AuthResponse';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  constructor(private readonly http: HttpClient) {}
  private readonly apiUrl = 'http://localhost:8080/auth';
  login(user: User): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/authenticate`, user);
  }
  register(user: User) {
    return this.http.post(`${this.apiUrl}/register`, user);
  }
  logout() {
    localStorage.removeItem('token');
  }
  setToken(token: string) {
    localStorage.setItem('token', token);
  }
  getToken() {
    return localStorage.getItem('token');
  }
}
