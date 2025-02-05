import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserDetailService } from './user-detail.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  user: any = null;

  constructor(
    private route: ActivatedRoute,
    private userDetailService: UserDetailService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.userDetailService.getUserById(+id).subscribe((response) => {
        this.user = response.data;
        console.log(this.user);
      });
    }
  }
}
