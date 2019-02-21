import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private http: HttpClient
  ) { }

  public form = {
    email: null,
    password: null
  }

  public error = null;

  onSubmit() {
    return this.http.post('http://recipe.test/api/login', this.form).subscribe(
      data => console.log(data),
      err => this.handleError(err)
    )
  }

  handleError(error) {
    this.error = error.error.error;
  }

  ngOnInit() {
  }

}
