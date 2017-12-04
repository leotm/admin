import { Injectable } from '@angular/core';
// import { HttpClient } from "@angular/common/http";
// import { Observable } from 'rxjs/Observable';
// import { of } from 'rxjs/observable/of';
import { error } from 'util';

@Injectable()
export class UserService {

  public users: (string | Date)[][] = [
    ["admin", "Foo", "Bar", "admin@merinen.co", "changeme", new Date("2017-11-27T13:09:45"), new Date("2017-11-28T07:02:23")]
  ];

  public id: number;

  // private http: HttpClient
  constructor() { }

  addUser(username, firstname, surname, email, password) {
    this.users.push([username, firstname, surname, email, password, new Date(), ""]);
  }

  updateUser(id, username, firstname, surname, email, password) {
    this.users[id][0] = username;
    this.users[id][1] = firstname;
    this.users[id][2] = surname;
    this.users[id][3] = email;
    this.users[id][4] = password;
    this.users[id][6] = new Date();
  }

  getUsers(): (string | Date)[][] {
    this.sortUsersByDateEdited();
    return this.users;
  }

  getUser(id): (string | Date)[] {
    return this.users[id];
  }

  sortUsersByDateEdited() {
    this.users.sort((a,b) => {
      return +b[6] - +a[6];
    })
  }

  // getUsers(): Observable<any> {
  //   return this.http.get("this.data");
  // }

}
