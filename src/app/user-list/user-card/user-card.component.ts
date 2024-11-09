import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from './user';
@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  //this has to be inputed from the parent component (user-list)
  @Input() users!: User[];
}
