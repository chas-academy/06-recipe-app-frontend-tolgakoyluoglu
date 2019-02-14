import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-result',
  templateUrl: './recipe-result.component.html',
  styleUrls: ['./recipe-result.component.scss']
})
export class RecipeResultComponent implements OnInit {

  searchInput = this.searchInput;
  healthLabel;
  dietLabel;
  recipes: any

  //$scope; getValue = this.healthLabel;

  constructor(private recipeService: RecipeService) { }


  handleRecipes = () => {
    this.recipeService.getRecipes(this.searchInput, this.healthLabel, this.dietLabel).subscribe(data => {
      this.recipes = data.hits.map(hit => hit.recipe)
      console.log(this.recipes)
      console.log(this.searchInput)
    })
  }

  ngOnInit() {
  }

}
