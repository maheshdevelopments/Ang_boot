import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http'
import { Headers, RequestOptions } from '@angular/http';
import { User } from './models/user.model';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


@Injectable()

export class AuthService {
  constructor(private myRoute: Router, private http: HttpClient) { }

  sendToken(token: string) {
    localStorage.setItem("LoggedInUser", token)
  }

  getToken() {
    return localStorage.getItem("LoggedInUser")
  }

  isLoggednIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem("LoggedInUser");
    this.myRoute.navigate(["login"]);
  }

  savereg(info) {
    let body = JSON.stringify(info);
    console.log(body);
    return this.http.post("http://localhost:8081/api/users/", info)
      .pipe(map(res => res));
  }
  viewdetail() {
    return this.http.get("http://localhost:8081/api/users/")
      .pipe(map(res => res));
  }
}


