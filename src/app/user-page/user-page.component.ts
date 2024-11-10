import { Component, OnInit, inject } from '@angular/core';
import { User } from '../user-list/user-card/user';
import { AppHeaderComponent } from '../app-header/app-header.component';
import { UserCardComponent } from '../user-list/user-card/user-card.component';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
// import { Route } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-user-page',
  standalone: true,
  imports: [AppHeaderComponent, UserCardComponent],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.css'
})

export class UserPageComponent implements OnInit {
  pageType: string = 'user';
  id: number = 0; //to be fetched from the route
  route: ActivatedRoute = inject(ActivatedRoute);
  //to be fetched from the Db
  users: User[] = [];

  constructor(private userService: UserService, private toastr: ToastrService) {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  ngOnInit(): void {
    //fetch user from the Db and insert in list
    //but first get id from the route
    this.userService.getUser(this.id).subscribe((data: any) => {
      if(data.data) {
        this.users = [data.data];
      }
      else {
        this.toastr.error('User not found', 'Enter a valid user id'); //not working proberly idk why
      }
    })
  };
}
