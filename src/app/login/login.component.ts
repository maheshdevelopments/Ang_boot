import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form1;
  reguser: User[] = [];
  verifyUser;
  constructor(private fb: FormBuilder,
    private myRoute: Router,
    private auth: AuthService) {
    this.form1 = fb.group({
      email1: ['', [Validators.required]],
      password1: ['', Validators.required]
    });
  }
  ngOnInit() {
    this.auth.viewdetail().subscribe(data => this.reguser = data);
  }
  login() {

    let email = this.form1.value.email1;
    if (this.form1.valid) {
      var verifyUser = this.reguser.filter(function (hero) {
        return hero.email == email;
      });

      console.log(JSON.stringify(verifyUser));

      if (verifyUser.length >= 1) {
        this.auth.sendToken(this.form1.value.email1)
        this.myRoute.navigate(["home"]);
      }
    }
  }
}