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
import {UserService} from '../services/user-service';
import { ProfileReviewsSectionComponent } from './profile-reviews-section/profile-reviews-section.component';
import { ProfileCommentsSectionComponent } from './profile-comments-section/profile-comments-section.component';
import { ProfileNotASectionComponent } from './profile-not-a-section/profile-not-a-section.component';

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
    ProfileCommentsSectionComponent,
    ProfileReviewsSectionComponent,
    SignUpComponent,
    ProfileNotASectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    IMDBSearchService,
    ReviewService,
    CommentService,
    UserService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
