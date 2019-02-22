import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  getSavedRecipes(email): Observable<any> {
    console.log(email);
    return this.http.get(`${this.baseUrl}/recipe`);
  }

  sendRecipe(data) {
    return this.http.post(`${this.baseUrl}/save-recipe`, data);
  }
}

