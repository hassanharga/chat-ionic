import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }
  setToken(token) {
    localStorage.setItem('chatToken', token);
  }
  getToken() {
    return localStorage.getItem('chatToken');
  }
  deleteToken() {
    localStorage.clear();
  }
  getPayload() {
    const token = this.getToken();
    let payload;
    if (token) {
      payload = token.split('.')[1];
      payload = JSON.parse(window.atob(payload));
    }
    return payload.data;
  }
}
