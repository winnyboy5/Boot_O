import { Component, OnInit } from '@angular/core';
import { Globals } from '../../shared/globals';
import { BooConfig } from '../shared/boo-config';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';


@Component({
  selector: 'boo-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {

  constructor(public globals: Globals, private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.userService.getConfig().subscribe(
      data => {
        console.log(data);
        if (data && data.booInit) {
          this.router.navigate(['/startup']);
        }
      });

  }

}
