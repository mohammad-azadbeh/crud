import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) {
  }

  addUser(user: User) {
    console.log(user);
    this.http.post('', user)
      .subscribe(res => console.log('Done'));
  }

  getUser() {
    return this
      .http
      .get('https://next.json-generator.com/api/json/get/4kmnBt0-D');
  }
}
