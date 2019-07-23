import {Component, OnInit, OnChanges, SimpleChange} from '@angular/core';
import {User} from './user';
import {UsersService} from './users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users: User[];
  user: User;

  constructor(private userService: UsersService) {
  }

  submitUser($event) {
    console.log($event);
    if ($event.id != null) {
      let index = this.users.indexOf(this.user);
      this.users[index] = $event;
      /*this.users.splice(index, 1);*/
    } else {
      $event.id = Math.random();
      this.users.push($event);
    }
  }

  editClick(user: User) {
    this.user = user;
  }

  ngOnInit() {
    this.userService.getUser()
      .subscribe((data: User[]) => {
        this.users = data;
      });
  }

}
