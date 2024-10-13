import { Component } from '@angular/core';
import { LoginFormComponent } from './login-form/login-form.component';

@Component({
  selector: 'nevy11-login-content',
  standalone: true,
  imports: [LoginFormComponent],
  templateUrl: './login-content.component.html',
  styleUrl: './login-content.component.scss',
})
export class LoginContentComponent {}
