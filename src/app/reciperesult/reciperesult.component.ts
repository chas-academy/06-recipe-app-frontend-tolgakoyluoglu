import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-reciperesult',
  templateUrl: './reciperesult.component.html',
  styleUrls: ['./reciperesult.component.scss']
})
export class ReciperesultComponent implements OnInit {
  searchInput;
  recipes: [];


  constructor(private recipeService: RecipeService) { }


  handleRecipes = () => {
    this.recipeService.getRecipes(this.searchInput).subscribe(data => {
      this.recipes = data.hits.map(hit => hit.recipe)
      console.log(data.hits)
    })
  }

  ngOnInit() {
  }

}
