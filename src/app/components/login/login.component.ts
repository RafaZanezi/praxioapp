import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  showPassword: boolean;
  formValid: boolean;
  icon: string;
  form: FormGroup;

  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private toastr: ToastrService
  ) {
    this.form = formBuilder.group({
      email: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  ngOnInit() {
    this.viewPassword();
  }

  viewPassword() {
    this.showPassword = !this.showPassword;
    this.icon = this.showPassword ? `fa fa-eye` : `fa fa-eye-slash`;
  }

  login() {
    this.formValid = this.validate();

    if (this.formValid) {
      this.userService.autenticate(this.email.value, this.password.value).subscribe(res => console.log(res));
      // localStorage[`token`] = true;
      // this.router.navigate([`/home`]);
    } else {
      this.emptyFields();
    }
  }

  private validate() {
    this.form.markAsTouched();
    return this.form.valid;
  }

  private emptyFields() {
    this.toastr.error('Campos obrigatórios não foram preenchidos', 'Erro');
  }

  get email(): AbstractControl {
    return this.form.get('email');
  }

  get password(): AbstractControl {
    return this.form.get('password');
  }

}
