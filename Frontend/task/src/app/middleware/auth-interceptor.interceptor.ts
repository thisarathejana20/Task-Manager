import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthServiceService } from '../service/auth-service.service';

export const authInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  const token = inject(AuthServiceService).getToken();
  if (token) {
    req = req.clone({
      headers: req.headers.set('Authorization', 'Bearer ' + token),
    });
  }
  return next(req);
};
