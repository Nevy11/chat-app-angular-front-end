import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from './login';
import { MessageReturned } from '../../sign-up-content/sign-up-form/sign-up';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}
  login_user(body: Login) {
    return this.http.post<MessageReturned>(
      'http://localhost:8080/login_user',
      body
    );
  }
}
