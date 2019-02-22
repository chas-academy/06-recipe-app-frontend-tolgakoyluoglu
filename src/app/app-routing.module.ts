import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeResultComponent } from './recipe-result/recipe-result.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { BeforeLoginService } from './services/before-login.service';
import { AfterLoginService } from './services/after-login.service';

const routes: Routes = [
  { path: '', redirectTo: 'recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipeResultComponent },
  { path: 'recipes/detail/:id', component: RecipeDetailsComponent },
  { path: 'login', component: LoginComponent, canActivate: [BeforeLoginService] },
  { path: 'register', component: SignupComponent, canActivate: [BeforeLoginService] },
  { path: 'profile', component: ProfileComponent, canActivate: [AfterLoginService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
