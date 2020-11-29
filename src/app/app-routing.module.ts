import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MoviePageComponent} from './movie-page/movie-page.component';
import {ReviewsComponent} from './reviews/reviews.component';
import {ImdbSearchComponent} from './imdb-search/imdb-search.component';
import {HomePageComponent} from './home-page/home-page.component';

const routes: Routes = [
  {path: 'search/movies/:movieId', component: MoviePageComponent},
  {path: 'search/movies/:movieId/reviews', component: ReviewsComponent},
  {path: 'search', component: ImdbSearchComponent},
  {path: 'search/:movieTitle', component: ImdbSearchComponent},
  {path: '', component: HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
