import { Component } from '@angular/core';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Recipe App';
  searchInput = this.searchInput;
  recipes: [];


  constructor(private recipeService: RecipeService) { }


  handleRecipes = () => {
    this.recipeService.getRecipes(this.searchInput).subscribe(data => {
      this.recipes = data.hits.map(hit => hit.recipe)
      console.log(data.hits)
    })
  }
}
