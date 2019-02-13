import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RecipeService {

  baseUrl = `https://api.edamam.com/`
  apiId = `4e1fec26`
  apiKey = `700a8df20bec59685c5284880e20ef03`
  results: string;


  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body;
  }

  getRecipes(results: string): Observable<any> {

    return this.http.get<any>(this.baseUrl + 'search?q=' + results + '&app_id=' + this.apiId + '&app_key=' + this.apiKey)
  }

  getRecipe(id): Observable<any> {
    return this.http.get(this.baseUrl + 'search?q=' + id + '&app_id=' + this.apiId + '&app_key=' + this.apiKey).pipe(
      map(this.extractData));
  }


}
