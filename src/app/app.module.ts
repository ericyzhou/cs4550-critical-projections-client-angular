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
import {ReviewService} from '../services/review-service';
import {CommentService} from '../services/comment-service';
import { ReviewMediaComponent } from './review-media/review-media.component';
import { CommentComponent } from './comment/comment.component';
import { ProfileSettingsSectionComponent } from './profile-settings-section/profile-settings-section.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviePageComponent,
    ReviewsComponent,
    ImdbSearchComponent,
    ImdbSearchResultComponent,
    HomePageComponent,
    LoginPageComponent,
    ProfilePageComponent,
    ReviewMediaComponent,
    CommentComponent,
    ProfileSettingsSectionComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    IMDBSearchService,
    ReviewService,
    CommentService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
