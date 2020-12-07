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
  arr: { [key: string]: any; } = {};
  movie: any;
  reviews: any[] = [];
  rating = 1;
  title = '';
  body = '';

  constructor(private activatedRoute: ActivatedRoute,
              private imdbService: IMDBSearchService,
              private reviewService: ReviewService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const movieId = params.movieId;
      if (typeof movieId !== 'undefined') {
        this.imdbService.findMovieById(movieId)
          .then(movie => this.movie = movie);
        this.reviewService.fetchReviewsForMovie(movieId)
          .then(reviews => this.reviews = reviews);
      }
    });
  }

  postReview = () => {
    this.reviewService.createReview(this.title, this.body, this.rating, this.movie.imdbID)
      .then(response => this.addReview(response));
    this.title = '';
    this.body = '';
    this.rating = 1;
  }

  addReview = (review: any) => {
    this.reviews.push(review);
  }
}
