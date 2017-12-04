import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  public heading: string = "Add new user";
  public username:string;
  public firstname:string;
  public surname: string;
  public email: string;
  public password: string;

  constructor(private userService: UserService, private router: Router, private location: Location) { }

  ngOnInit() {
    if (typeof this.userService.id == "undefined") {
      this.router.navigate(['/login']);
    }
  }

  addUser() {
    this.userService.addUser(this.username, this.firstname, this.surname, this.email, this.password);
    this.router.navigate(['/']);
  }

  cancel() {
    this.location.back();
  }

}
