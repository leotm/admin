import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public heading: string = "Login";
  public username: string;
  public password: string;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  login() {
    const users = this.userService.users;
    for (let i=0; i < users.length; i++) {
      if ((this.username === users[i][0]) && (this.password === users[i][4])) {
        this.userService.id = i;
        this.router.navigate(['/']);
        return false;
      }
    }
  }

}
