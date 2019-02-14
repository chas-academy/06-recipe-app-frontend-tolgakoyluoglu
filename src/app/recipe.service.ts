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



  constructor(private http: HttpClient) { }


  getRecipes(results: string, healthLabel): Observable<any> {


    //let apiUrl = `http://api.yummly.com/v1/api/recipes?_app_id=69e22b22&_app_key=9975f783a5f500b7a258d19dbfc63ad4&q=${results}`

    // return this.http.get<any>(apiUrl);
    // return this.http.get<any>(`https://api.edamam.com/search?q=chicken&app_id=${appId}&app_key=${appKey}&from=0&to=3&calories=591-722&health=alcohol-free`)

    return this.http.get<any>(this.baseUrl + 'search?q=' + results + '&app_id=' + this.apiId + '&app_key=' + this.apiKey + '&from=0&to=30&health=alcohol-free&' + healthLabel)
  }

  getRecipe(id): Observable<any> {
    //  let apiUrl = `http://api.yummly.com/v1/api/recipes?_app_id=69e22b22&_app_key=9975f783a5f500b7a258d19dbfc63ad4&q=${id}`

    //return this.http.get<any>(apiUrl)

    return this.http.get(this.baseUrl + 'search?q=' + id + '&app_id=' + this.apiId + '&app_key=' + this.apiKey + '&from=0&to=1')//.pipe(
  }

  saveRecipeToList(label: string) {

  }

  getSavedRecipes() {
    return;
  }

}
