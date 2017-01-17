import { Component, OnInit, Input } from '@angular/core';
import { UserService, User } from '../services/user.service';
import { Team, TeamService, Thread } from '../services/team.service';

@Component({
  selector: 'app-chat-status',
  templateUrl: './chat-status.component.html',
  styleUrls: ['./chat-status.component.css']
})
export class ChatStatusComponent implements OnInit {
  @Input()
  team: Team;

  currentUser: User;
  users: User[];
  threads: Thread[];

  constructor(private userService: UserService) {
    this.currentUser = userService.getUser();
    this.userService.currentUser.subscribe(user => this.currentUser = user);
  }

  ngOnInit() {
    this.users = this.team.users;
    this.threads = this.team.threads;
  }

}