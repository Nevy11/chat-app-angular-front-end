import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { TopBarContentComponent } from "./top-bar-content/top-bar-content.component";

@Component({
  selector: 'nevy11-top-bar',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, TopBarContentComponent],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss'
})
export class TopBarComponent {
  show_settings = true
  change_settings(){
    this.show_settings = !this.show_settings
  }
}
