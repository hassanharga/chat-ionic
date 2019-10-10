import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = environment.apiUrl;

  constructor(private http: HttpClient) { }

  registerUser(username, email, password): Observable<any> {
    return this.http.post(`${this.url}/register`, {username, email, password});
  }
  loginUser(user, pass): Observable<any> {
    return this.http.post(`${this.url}/login`, {user, pass});
  }
}
