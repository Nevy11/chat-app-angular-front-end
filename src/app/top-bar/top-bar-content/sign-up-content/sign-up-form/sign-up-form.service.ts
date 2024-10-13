import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignUp } from './sign-up';

@Injectable({
  providedIn: 'root',
})
export class SignUpFormService {
  constructor(private http: HttpClient) {}
  sign_up(body: SignUp) {
    return this.http.post('http://localhost:8080/sign_up_user', body);
  }
}
