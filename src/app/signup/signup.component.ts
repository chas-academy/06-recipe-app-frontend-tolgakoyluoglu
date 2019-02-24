import { Component, OnInit } from '@angular/core';
import { TokenService } from '../services/token.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UsersService } from '../services/users.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(
    private service: UsersService,
    private token: TokenService,
    private router: Router,
    private auth: AuthService,
  ) { }

  public form = {
    email: null,
    name: null,
    password: null,
  }

  public error = [];

  ngOnInit() {
  }

  onSubmit() {
    this.service.signup(this.form).subscribe(
      data => this.handleResponse(data),
      err => this.handleError(err)
    )
  }

  handleResponse(data) {
    this.token.handle(data.access_token, data.user.email);
    this.auth.changeStatus(true);
    this.router.navigateByUrl('/profile');
  }

  handleError(error) {
    this.error = error.error.errors;
  }

}
