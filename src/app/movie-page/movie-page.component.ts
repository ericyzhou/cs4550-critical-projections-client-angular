import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IMDBSearchService} from '../../services/IMDBSearchService';
import {ReviewService} from '../../services/review-service';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css']
})

export class MoviePageComponent implements OnInit {
  movie: any;
  reviews: any[] = [];
  rating = 1;
  title = '';
  body = '';
  score = 0;

  constructor(private activatedRoute: ActivatedRoute,
              private imdbService: IMDBSearchService,
              private reviewService: ReviewService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const movieId = params.movieId;
      if (typeof movieId !== 'undefined') {
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
    this.reviewService.createReview(this.title, this.body, this.rating, this.movie.imdbID)
      .then(response => {
        console.log(response);
        this.addReview(response);
        this.reviewService.fetchMovieScore(this.movie.id)
          .then(score => this.score = score);
      });
    this.title = '';
    this.body = '';
    this.rating = 1;
  }

  addReview = (review: any) => {
    this.reviews.push(review);
  }
}
