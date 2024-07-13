import {
  Component,
  computed,
  EventEmitter,
  Input,
  Output,
  signal,
} from '@angular/core';

import { User } from './user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // make sure that prop is required to be filled
  //make typescript know that the future type is string
  @Input({ required: true }) user!: User;

  @Input({ required: true }) selected!: boolean;

  // Create a custom event called select
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return '../assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
