import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { TokenService } from '../services/token.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(
    private service: UsersService,
    private token: TokenService,
    private userService: UsersService
  ) { }

  collection = [];
  email: any;
  id;

  ngOnInit() {
    this.getRecipes();
  }

  getRecipes() {
    let email = this.token.getEmail()
    this.service.getSavedRecipes().subscribe(response => {
      response.data.forEach(e => {
        if (e.email == email) this.collection.push(e)
      });
      console.log(this.collection);
    });
  }

  deleteRecipe(id) {
    let recipe;
    this.collection.forEach(e => {
      if (e.id == id) recipe = e;
    });
    this.service.deleteSavedRecipe(recipe).subscribe(response => {
      this.collection = [];
      response.data.forEach(e => {
        if (e.email == this.email) this.collection.push(e);
      });
      this.getRecipes();
    })
  }

  editRecipe(data) {
    let dbModel = this.constructModel(data)
    console.log(dbModel);
    this.userService.sendUpdatedRecipe(dbModel).subscribe(data => {
    })
  }

  constructModel(data) {
    let dbModel = {
      id: data.id,
      email: this.token.getEmail(),
      label: data.label
    }
    
    return dbModel;
  }


}

