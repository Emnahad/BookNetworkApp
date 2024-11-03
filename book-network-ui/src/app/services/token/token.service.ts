import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private readonly tokenKey = 'authToken';

  // Getter for token
  get token(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  // Setter for token
  set token(token: string | null) {
    if (token) {
      localStorage.setItem(this.tokenKey, token);
    } else {
      localStorage.removeItem(this.tokenKey);
    }
  }
}
