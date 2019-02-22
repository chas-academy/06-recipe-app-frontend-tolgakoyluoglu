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
    private token: TokenService
  ) { }

  ngOnInit() {
    let email = this.token.getEmail()
    this.service.getSavedRecipes(email).subscribe(data => {
      console.log(data)
    });
  }

}
