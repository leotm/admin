import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  public heading: string = "Admin panel";
  public users: (string | Date)[][];

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    if (typeof this.userService.id == "undefined") {
      this.router.navigate(['/login']);
    }
    this.users = this.userService.getUsers();
    if (typeof this.userService.id != "undefined") {
      this.heading = `Welcome back ${this.userService.users[this.userService.id][1]},`;
    }
  }

  delete(user) {
    if (confirm("Are you sure you want to delete?")) {
      const userIndex = this.userService.users.indexOf(user);
      this.userService.users.splice(userIndex, 1);
    }
  }

  logout() {
    this.userService.id = null;
    this.router.navigate(['/login']);
    return false;
  }

}
