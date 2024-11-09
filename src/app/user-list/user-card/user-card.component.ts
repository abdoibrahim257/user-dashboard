import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from './user';
import { Router } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule, NgxPaginationModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})

export class UserCardComponent {
  //this has to be inputed from the parent component (user-list)
  @Input() users!: User[];
  @Input() currentPage!: number;
  @Input() totalItems!: number;
  @Input() PerPage!: number;

  viewUser(user: User) {
    console.log(user);
  }
}
