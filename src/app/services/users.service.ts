import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl = 'http://recipe.test/api'

  constructor(
    private http: HttpClient,
  ) { }

  login(data) {
    return this.http.post(`${this.baseUrl}/login`, data)
  }

  signup(data) {
    return this.http.post(`${this.baseUrl}/signup`, data)
  }
}

