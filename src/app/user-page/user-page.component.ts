import { Component } from '@angular/core';
import { User } from '../user-list/user-card/user';
import { AppHeaderComponent } from '../app-header/app-header.component';
import { UserCardComponent } from '../user-list/user-card/user-card.component';

@Component({
  selector: 'app-user-page',
  standalone: true,
  imports: [AppHeaderComponent, UserCardComponent],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.css'
})

export class UserPageComponent {
  pageType: string = 'user';

  //to be fetched from the Db
  users: User[] = [
    {
      "id": 3,
      "email": "emma.wong@reqres.in",
      "first_name": "Emma",
      "last_name": "Wong",
      "avatar": "https://reqres.in/img/faces/3-image.jpg"
    }
  ];
}
