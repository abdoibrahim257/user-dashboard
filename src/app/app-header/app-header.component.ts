import { Component, Input } from '@angular/core';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { CommonModule} from '@angular/common';
import { MatIcon } from '@angular/material/icon';
@Component({
  selector: 'app-app-header',
  standalone: true,
  imports: [MatIcon,SearchBarComponent, CommonModule],
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.css'
})
export class AppHeaderComponent {
  @Input() pageType: string = 'home';
  btnClicked: boolean = false;

  //change route to home page
  returnHome() :void {
    this.btnClicked = true;
    console.log('returning home');
  }
}
