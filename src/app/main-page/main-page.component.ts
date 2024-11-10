import { Component } from '@angular/core';
import { AppHeaderComponent } from '../app-header/app-header.component';
import { UserListComponent } from '../user-list/user-list.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [ RouterModule,AppHeaderComponent, UserListComponent ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {}
