import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeResultComponent } from './recipe-result/recipe-result.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { BeforeLoginService } from './services/before-login.service';

const routes: Routes = [
  //{ path: '', redirectTo: '', pathMatch: 'full' },
  { path: '', component: RecipeResultComponent },
  { path: 'detail/:id', component: RecipeDetailsComponent },
  { path: 'login', component: LoginComponent, canActivate: [BeforeLoginService] },
  { path: 'register', component: SignupComponent, canActivate: [BeforeLoginService] },
  { path: 'profile', component: ProfileComponent },
  { path: 'profile/detail/:id', component: RecipeDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
