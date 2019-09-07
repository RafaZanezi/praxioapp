import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  bPassword: boolean;
  sIcon: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.viewPassword();
  }

  viewPassword() {
    this.bPassword = !this.bPassword;
    this.sIcon = this.bPassword ? `fa fa-eye` : `fa fa-eye-slash`;
  }

  login() {
    localStorage[`token`] = `xptoh26410x5=50`;
    this.router.navigate([`/home`]);
  }

}
