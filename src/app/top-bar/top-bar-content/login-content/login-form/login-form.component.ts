import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { LoginService } from './login.service';
import { Login } from './login';
import { Router } from '@angular/router';
@Component({
  selector: 'nevy11-login-form',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    CommonModule,
    MatIconModule,
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
})
export class LoginFormComponent {
  loginForm!: FormGroup;
  hide = signal(true);

  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {
    this.loginForm = fb.group({
      username: ['', [Validators.required]],
      userpassword: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  login_user() {
    if (this.loginForm.valid) {
      console.log(`user: ${this.loginForm.value['username']}`);
      let body: Login = {
        username: this.loginForm.value['username'],
        userpassword: this.loginForm.value['userpassword'],
      };
      this.loginService.login_user(body).subscribe((resp) => {
        console.log(resp.message);
        if (resp.message === 'true') {
          this.router.navigate(['Official Website']);
        } else {
          console.assert('incorrect username or passsword');
        }
      });
    } else {
      console.error('Fill in the missing fields');
    }
  }
}
