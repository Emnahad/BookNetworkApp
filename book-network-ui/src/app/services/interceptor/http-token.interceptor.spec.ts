import { TestBed } from '@angular/core/testing';
import { HTTP_INTERCEPTORS, HttpClient, HttpHandler, HttpRequest } from '@angular/common/http';
import { HttpTokenInterceptor } from './http-token.interceptor';

describe('HttpTokenInterceptor', () => {
  let interceptor: HttpTokenInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpTokenInterceptor,
        { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true }
      ]
    });
    interceptor = TestBed.inject(HttpTokenInterceptor);
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });
});
