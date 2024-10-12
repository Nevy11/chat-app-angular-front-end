import { Routes } from '@angular/router';
import { SignUpContentComponent } from './top-bar/top-bar-content/sign-up-content/sign-up-content.component';
import { LoginContentComponent } from './top-bar/top-bar-content/login-content/login-content.component';
import { OfficialWebsiteContentComponent } from './top-bar/top-bar-content/official-website-content/official-website-content.component';
import { LibraryContentComponent } from './top-bar/top-bar-content/library-content/library-content.component';
import { HelpCenterContentComponent } from './top-bar/top-bar-content/help-center-content/help-center-content.component';

export const routes: Routes = [
  { path: 'sign up', component: SignUpContentComponent },
  { path: 'login', component: LoginContentComponent },
  { path: 'Official Website', component: OfficialWebsiteContentComponent },
  { path: 'Library', component: LibraryContentComponent },
  { path: 'Help Center', component: HelpCenterContentComponent },
];
