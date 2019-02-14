import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.scss']
})
export class SavedComponent implements OnInit {

  constructor(
    private recipeService: RecipeService
  ) { }

  ngOnInit() {
    this.recipeService
  }

}
