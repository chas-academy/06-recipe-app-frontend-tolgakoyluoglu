import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeResultComponent } from './recipe-result/recipe-result.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { SavedComponent } from './saved/saved.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { BeforeLoginService } from './before-login.service';
import { AfterLoginService } from './after-login.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [BeforeLoginService] },
  { path: 'signup', component: SignupComponent, canActivate: [BeforeLoginService] },
  { path: 'profile', component: ProfileComponent, canActivate: [AfterLoginService] },
  { path: 'recipes', component: RecipeResultComponent },
  { path: 'recipes/detail/:id', component: RecipeDetailsComponent },
  { path: 'saved', component: SavedComponent },
  { path: '', redirectTo: 'recipes', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
