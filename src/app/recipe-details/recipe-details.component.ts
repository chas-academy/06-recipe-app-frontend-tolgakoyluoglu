import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { RecipeService } from '../services/recipe.service';
import { TokenService } from '../services/token.service';
import { UsersService } from '../services/users.service';


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
    private service: RecipeService,
    private token: TokenService,
    private userService: UsersService
  ) { }

  ngOnInit() {
    this.service.getRecipe(this.route.snapshot.params['id']).subscribe(data => {
      this.recipe = data.hits.map(hit => hit.recipe)
    });
  }

  goToRecipes() {
    this.router.navigate(['/recipes']);
  }

  saveRecipe() {
    let dbModel = this.constructModel(this.recipe[0])
    console.log(dbModel);
    this.userService.sendRecipe(dbModel).subscribe(data => {
      console.log(data)
    })
  }


  arrayToString(array) {
    let string = "";
    array.forEach(e => {
      string = string + e + ",";
    });
    return string;
  }

  constructModel(recipe) {
    let dbModel = {

      email: this.token.getEmail(),

      label: recipe.label,
      image: recipe.image,
      calories: recipe.calories.toString(),
      healthLabels: this.arrayToString(recipe.healthLabels),
      ingredientLines: this.arrayToString(recipe.ingredientLines),
    }

    return dbModel;
  }

}
