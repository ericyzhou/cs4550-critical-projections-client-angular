import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MoviePageComponent} from './movie-page/movie-page.component';
import {ReviewsComponent} from './reviews/reviews.component';
import {ImdbSearchComponent} from './imdb-search/imdb-search.component';
import {HomePageComponent} from './home-page/home-page.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {ProfilePageComponent} from './profile-page/profile-page.component';

const routes: Routes = [
  {path: 'search/movies/:movieId', component: MoviePageComponent},
  {path: 'search/movies/:movieId/reviews', component: ReviewsComponent},
  {path: 'search', component: ImdbSearchComponent},
  {path: 'search/:movieTitle', component: ImdbSearchComponent},
  {path: '', component: HomePageComponent},
  {path: 'profiles/login', component: LoginPageComponent},
  {path: 'profiles/users', component: ProfilePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
