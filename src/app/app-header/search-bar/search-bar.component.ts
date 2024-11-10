import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { UserService } from '../../user.service';
import { catchError, first } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatIconModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  idQuery: string = '';

  constructor(private router: Router, private userservice: UserService, private toastr: ToastrService) {}

  getSearchResults() {
    //check if the search bar is empty
    //if not, search that the query is a number
    //if it is, route to the user page
    //if not, display a message
    if (this.idQuery === '') {
      this.toastr.error('Please enter a user id', 'Empty search bar');
    } else if (isNaN(parseInt(this.idQuery))) {
      this.toastr.error('Please enter a valid user id', 'Invalid search query');
    } else {
      const response = this.userservice.getUser(Number(this.idQuery));
      response.pipe(first(),
      catchError((error) => {
        this.toastr.error('User not found', 'Enter a valid user id');
        return error;
      })).subscribe((data: any) => {
        if(data.data) {
          this.router.navigate(['/user', this.idQuery]);
        }
      });
    }
  }
}
