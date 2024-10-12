import { Component } from '@angular/core';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'nevy11-top-bar-content',
  standalone: true,
  imports: [CdkAccordionModule, RouterModule, MatButtonModule],
  templateUrl: './top-bar-content.component.html',
  styleUrl: './top-bar-content.component.scss',
})
export class TopBarContentComponent {
  items = ['login', 'sign up', 'Official Website', 'Library', 'Help Center'];
  expandedIndex = 0;
}
