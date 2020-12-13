import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IMDBSearchService} from '../../services/IMDBSearchService';
import {ReviewService} from '../../services/review-service';
import {UserService} from '../../services/user-service';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css']
})

export class MoviePageComponent implements OnInit {
  movieId: any;
  movie: any;
  reviews: any[] = [];
  rating = 1;
  title = '';
  body = '';
  score = 0;

  constructor(private activatedRoute: ActivatedRoute,
              private imdbService: IMDBSearchService,
              private reviewService: ReviewService,
              private userService: UserService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const movieId = params.movieId;
      if (typeof movieId !== 'undefined') {
        this.movieId = movieId;
        this.imdbService.findMovieById(movieId)
          .then(movie => this.movie = movie);
        this.reviewService.fetchReviewsForMovie(movieId, 5)
          .then(reviews => this.reviews = reviews);
        this.reviewService.fetchMovieScore(movieId)
          .then(score => this.score = score);
      }
    });
  }

  postReview = () => {
    this.userService.getCurrentUser()
      .then(response => {
        if (response.response === 0) {
          alert('You must be logged in to post a review');
          this.title = '';
          this.body = '';
          this.rating = 1;
        } else {
          this.reviewService.createReview(response.user.id, this.title, this.body, this.rating, this.movie.imdbID, response.user.role === 'verifiedCritic')
            .then(resp => {
              console.log(resp);
              this.addReview(resp);
              this.title = '';
              this.body = '';
              this.rating = 1;
            });
        }
      });
  }

  addReview = (review: any) => {
    this.reviews.push(review);
  }

  reload = () => {
    this.reviewService.fetchReviewsForMovie(this.movieId, 5)
      .then(reviews => this.reviews = reviews);
  }
}
