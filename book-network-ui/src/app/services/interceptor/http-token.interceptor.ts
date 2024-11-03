import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import {TokenService} from '../token/token.service';

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {
  constructor(private tokenService: TokenService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Log that the interceptor is triggered
    console.log('Interceptor triggered');

    // Add your authorization token here
    const token = this.tokenService.token; // or wherever you store your token
    console.log(token);
    if (token) {
      const cloned = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });


      return next.handle(cloned);
    }

    return next.handle(req);
  }
}
