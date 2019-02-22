import { Component, OnInit } from '@angular/core';
import { TokenService } from '../services/token.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private service: UsersService,
    private token: TokenService,
    private router: Router,
    private auth: AuthService,
  ) { }

  public form = {
    email: null,
    password: null
  }

  public error = null;

  onSubmit() {
    this.service.login(this.form).subscribe(
      data => this.handleResponse(data),
      err => this.handleError(err)
    )
  }

  handleResponse(data) {
    console.log(data);
    console.log(data.user.email);
    this.token.handle(data.access_token, data.user.email);
    this.auth.changeStatus(true);
    this.router.navigateByUrl('/profile');
  }

  handleError(error) {
    this.error = error.error.error;
  }

  ngOnInit() {
  }

}
