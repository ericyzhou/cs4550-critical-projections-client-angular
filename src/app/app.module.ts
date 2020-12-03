import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviePageComponent } from './movie-page/movie-page.component';
import {IMDBSearchService} from '../services/IMDBSearchService';
import { ReviewsComponent } from './reviews/reviews.component';
import { ImdbSearchComponent } from './imdb-search/imdb-search.component';
import {FormsModule} from '@angular/forms';
import { ImdbSearchResultComponent } from './imdb-search-result/imdb-search-result.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviePageComponent,
    ReviewsComponent,
    ImdbSearchComponent,
    ImdbSearchResultComponent,
    HomePageComponent,
    LoginPageComponent,
    ProfilePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [IMDBSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
