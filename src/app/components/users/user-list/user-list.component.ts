import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { UserListService } from './user-list.service';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

@Component({
  selector: 'app-user-list',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(
    public router: Router,
    private userListService: UserListService
  ) {}

  ngOnInit() {
    this.userListService.getUsers().subscribe((response) => {
      this.users = response.data;
      console.log(this.users);
    });
  }

  goToDetails(id: number) {
    this.router.navigate([`/users/${id}`]);
  }
}
