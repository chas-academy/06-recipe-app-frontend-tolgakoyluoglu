import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: '/recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {
  recipe: any

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: RecipeService
  ) { }

  ngOnInit() {
    this.service.getRecipe(this.route.snapshot.params['id']).subscribe(data => {
      this.recipe = data.hits.map(hit => hit.recipe)
      console.log(data.hits);
      console.log(this.recipe)
    });
  }

  goToRecipes() {
    this.router.navigate(['/recipes']);
  }

  saveRecipe(recipeLabel: string) {
    debugger;
  }

}
