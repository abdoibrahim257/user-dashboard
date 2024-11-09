import { Component } from '@angular/core';
import { AppHeaderComponent } from './app-header/app-header.component';
import { UserListComponent } from './user-list/user-list.component';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AppHeaderComponent, UserListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}
