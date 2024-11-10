import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCardComponent } from './user-card/user-card.component';
import { User } from './user-card/user';
import { UserService } from '../user.service';
import { PaginationControlsComponent } from './pagination-controls/pagination-controls.component';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [UserCardComponent, PaginationControlsComponent, CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class UserListComponent implements OnInit {

  userList: User[] = [];
  currentPage: number = 1;
  totalItems: number = 0;
  itemsPerPage: number = 0;
  isLoading: boolean = true;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.isLoading = true;
    this.userService.getUsers(this.currentPage).subscribe((data: any) => {
      this.userList = data.data;
      this.itemsPerPage = data.per_page;
      this.totalItems = data.total_pages;
    });

    setTimeout(() => { //because the api is too fast and we can't see the loading spinner
      this.isLoading = false;
      this.toggleBodyScrolling();
    }, 300);
    this.toggleBodyScrolling();
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.loadUsers();
  }

  toggleBodyScrolling() {
    if (this.isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  // this is a dummy users I will fetch with api later
  // userList: User[] = [
  //   {
  //     "id": 7,
  //     "email": "michael.lawson@reqres.in",
  //     "first_name": "Michael",
  //     "last_name": "Lawson",
  //     "avatar": "https://reqres.in/img/faces/7-image.jpg"
  //   },
  //   {
  //     "id": 8,
  //     "email": "lindsay.ferguson@reqres.in",
  //     "first_name": "Lindsay",
  //     "last_name": "Ferguson",
  //     "avatar": "https://reqres.in/img/faces/8-image.jpg"
  //   },
  //   {
  //     "id": 9,
  //     "email": "tobias.funke@reqres.in",
  //     "first_name": "Tobias",
  //     "last_name": "Funke",
  //     "avatar": "https://reqres.in/img/faces/9-image.jpg"
  //   },
  //   {
  //     "id": 10,
  //     "email": "byron.fields@reqres.in",
  //     "first_name": "Byron",
  //     "last_name": "Fields",
  //     "avatar": "https://reqres.in/img/faces/10-image.jpg"
  //   },
  //   {
  //     "id": 11,
  //     "email": "george.edwards@reqres.in",
  //     "first_name": "George",
  //     "last_name": "Edwards",
  //     "avatar": "https://reqres.in/img/faces/11-image.jpg"
  //   },
  //   {
  //     "id": 12,
  //     "email": "rachel.howell@reqres.in",
  //     "first_name": "Rachel",
  //     "last_name": "Howell",
  //     "avatar": "https://reqres.in/img/faces/12-image.jpg"
  //   }
  // ];

}
