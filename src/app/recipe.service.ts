import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class RecipeService {

  baseUrl = `https://api.edamam.com/`
  apiId = `4e1fec26`
  apiKey = `700a8df20bec59685c5284880e20ef03`


  constructor(private http: HttpClient) { }

  getRecipes(
    results: string
  ) {

    return this.http.get<any>(this.baseUrl + 'search?q=' + results + '&app_id=' + this.apiId + '&app_key=' + this.apiKey)
  }
}
