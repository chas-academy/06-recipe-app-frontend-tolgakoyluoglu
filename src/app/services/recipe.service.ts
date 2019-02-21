import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RecipeService {

  baseUrl = `https://api.edamam.com/`
  apiId = `4e1fec26`
  apiKey = `700a8df20bec59685c5284880e20ef03`
  results: string;
  healthLabel;
  dietLabel;

  constructor(private http: HttpClient) { }


  getRecipes(results: string, healthLabel, dietLabel): Observable<any> {

    return this.http.get<any>(this.baseUrl + 'search?q=' + results + '&app_id=' + this.apiId + '&app_key=' + this.apiKey + '&from=0&to=30&health=alcohol-free&' + healthLabel + '&' + dietLabel)
  }

  getRecipe(id): Observable<any> {

    return this.http.get(this.baseUrl + 'search?q=' + id + '&app_id=' + this.apiId + '&app_key=' + this.apiKey + '&from=0&to=1')//.pipe(
  }

  saveRecipeToList(label: string) {

  }

  getSavedRecipes() {
    return;
  }

}
