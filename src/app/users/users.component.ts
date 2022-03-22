import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../users.model';
import { UserService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: Users[] = [];
  displayedColumns: string[] = ['id', 'username', 'name', 'email'];
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.userService.getUsers().subscribe((users: any) => {
      this.users = users;
    });
  }
  goToDetails(userID: number) {
    this.router.navigate([`users/${userID.toString()}`]);
  }
}
