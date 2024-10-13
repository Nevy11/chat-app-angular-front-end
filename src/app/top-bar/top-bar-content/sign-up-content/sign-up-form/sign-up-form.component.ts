import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SignUpFormService } from './sign-up-form.service';
import { SignUp } from './sign-up';
import { Router } from '@angular/router';

@Component({
  selector: 'nevy11-sign-up-form',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './sign-up-form.component.html',
  styleUrl: './sign-up-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpFormComponent {
  emailForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private signupService: SignUpFormService,
    private router: Router
  ) {
    this.emailForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required]],
      userpassword: ['', [Validators.required]],
    });
  }
  get email() {
    return this.emailForm.get('email');
  }
  onSubmit() {
    if (this.emailForm.valid) {
      console.log(
        'The email is submitted successfully',
        this.emailForm.value.email
      );
      console.log(
        `user: ${this.emailForm.value.username} will be redirected to the login page`
      );
      let body: SignUp = {
        username: this.emailForm.value['username'],
        userpassword: this.emailForm.value['userpassword'],
        email: this.emailForm.value['email'],
      };
      this.signupService.sign_up(body).subscribe((resp) => {
        console.log(resp);
        if (resp.message === 'true') {
          console.log(
            `user ${this.emailForm.value['username']} is added successfuly to the system`
          );
          this.emailForm.reset();
          this.router.navigate(['login']);
        } else {
          console.assert('username or password is invalid');
        }
      });
    } else {
      console.log('Please fill in the fields marked red');
    }
  }
  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
}
