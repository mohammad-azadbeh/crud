import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../user';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() users: User[];
  @Output() editUserClick = new EventEmitter<User>();

  constructor(private userService: UsersService) {
  }

  deleteUser(user: User) {
    let index = this.users.indexOf(user);
    this.users.splice(index, 1);
  }

  editUser(user: User) {
    this.editUserClick.emit(user);
  }

  ngOnInit() {
  }

}
