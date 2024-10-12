import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';

@Component({
  selector: 'nevy11-sign-up-content',
  standalone: true,
  imports: [SignUpFormComponent],
  templateUrl: './sign-up-content.component.html',
  styleUrl: './sign-up-content.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpContentComponent {}
