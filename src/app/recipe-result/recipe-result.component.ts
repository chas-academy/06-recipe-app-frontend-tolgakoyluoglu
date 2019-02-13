import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-result',
  templateUrl: './recipe-result.component.html',
  styleUrls: ['./recipe-result.component.scss']
})
export class RecipeResultComponent implements OnInit {

  searchInput = this.searchInput;
  recipes: any


  constructor(private recipeService: RecipeService) { }


  handleRecipes = () => {
    this.recipeService.getRecipes(this.searchInput).subscribe(data => {
      this.recipes = data.hits.map(hit => hit.recipe)
      console.log(this.recipes)
    })
  }

  ngOnInit() {
  }

}
