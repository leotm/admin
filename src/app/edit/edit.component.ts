import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  public id;
  public heading: string = "Edit user";
  public user;
  public username;
  public firstname;
  public surname;
  public email;
  public password;
  public updated: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit() {
    if (typeof this.userService.id == "undefined") {
      this.router.navigate(['/login']);
    }
    this.id = this.route.snapshot.paramMap.get('id');
    this.user = this.userService.getUser(this.id)[0];
    [this.username, this.firstname, this.surname, this.email, this.password]
      = [this.user[0], this.user[1], this.user[2], this.user[3], this.user[4]];
  }

  updateUser() {
    this.userService.updateUser(this.id, this.username, this.firstname, this.surname, this.email, this.password);
    this.router.navigate(['/panel']);
    return false;
  }

}
