import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Subject } from 'rxjs';
//import { User } from './models';

import { User } from '../models/user.model';

@Injectable()
export class UserService {

  currentUser: Subject<User> = new Subject<User>();

  constructor() {
      this.currentUser.next(this.getUser());
  }

  setUser(user: User): void {
      this.currentUser.next(user);
      localStorage.setItem('user', JSON.stringify(user));
  }

  getUser(): User {
      let user = localStorage.getItem('user');
      if (user == null) {
          return;
      }
      return JSON.parse(user);
  }

}
