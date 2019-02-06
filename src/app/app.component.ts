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


  constructor(private recipeService: RecipeService) { }


  handleRecipes = () => {
    this.recipeService.getRecipes(this.searchInput).subscribe(data => {
      console.log(data);
    })
  }
}
