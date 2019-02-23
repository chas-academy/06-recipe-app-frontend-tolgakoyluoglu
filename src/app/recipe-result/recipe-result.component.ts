import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipe-result',
  templateUrl: './recipe-result.component.html',
  styleUrls: ['./recipe-result.component.scss']
})
export class RecipeResultComponent implements OnInit {

  searchInput = this.searchInput;
  search;
  healthLabel;
  dietLabel;
  recipes: any

  constructor(private recipeService: RecipeService) { }


  handleRecipes = () => {
    this.recipeService.getRecipes(this.searchInput, this.healthLabel, this.dietLabel).subscribe(data => {
      this.recipes = data.hits.map(hit => hit.recipe)
      console.log(this.recipes)
      console.log(this.searchInput)
    })
  }

  ngOnInit() {
    this.recipeService.getRecipes(this.search, this.healthLabel, this.dietLabel).subscribe(data => {
      this.recipes = data.hits.map(hit => hit.recipe)
    })
  }


}
