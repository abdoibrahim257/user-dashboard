import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatIconModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  idQuery: string = '';

  constructor(private router: Router) {}

  getSearchResults() {
    //check if the search bar is empty
    //if not, search that the query is a number
    //if it is, route to the user page
    //if not, display a message
    if (this.idQuery === '') {
      console.log('search bar is empty');
    } else if (isNaN(parseInt(this.idQuery))) {
      console.log('search query is not a number');
    } else {
      console.log('search query is a number');
      this.router.navigate(['/user', this.idQuery]);
    }
  }
}
