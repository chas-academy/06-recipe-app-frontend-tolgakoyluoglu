import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(
    private http: HttpClient
  ) { }

  public form = {
    email: null,
    name: null,
    password: null,
    passwordConfirmation: null
  }

  public error = [];

  ngOnInit() {
  }

  onSubmit() {
    return this.http.post('http://recipe.test/api/signup', this.form).subscribe(
      data => console.log(data),
      err => this.handleError(err)
    )
  }

  handleError(error) {
    this.error = error.error.errors;
  }

}
