import { Component, OnInit } from '@angular/core';
import {ReviewService} from '../../services/review-service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  movieId: any;
  userReviews: any[] = [];
  criticReviews: any[] = [];
  userCount = 0;
  criticCount = 0;

  constructor(private activatedRoute: ActivatedRoute,
              private reviewService: ReviewService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.movieId = params.movieId;
      if (typeof this.movieId !== 'undefined') {
        this.userCount = 3;
        this.criticCount = 3;
        this.reviewService.fetchUserReviewsForMovie(this.movieId, this.userCount)
          .then(reviews => this.userReviews = reviews);
        this.reviewService.fetchCriticReviewsForMovie(this.movieId, this.criticCount)
          .then(r => this.criticReviews = r);
      }
    });
  }

  moreUserReviews = () => {
    if (this.userCount < 5) {
      this.userCount = 5;
    } else {
      this.userCount += 5;
    }
    this.reviewService.fetchUserReviewsForMovie(this.movieId, this.userCount)
      .then(reviews => this.userReviews = reviews);
  }


  moreCriticReviews = () => {
    if (this.criticCount < 5) {
      this.criticCount = 5;
    } else {
      this.criticCount += 5;
    }
    this.reviewService.fetchCriticReviewsForMovie(this.movieId, this.criticCount)
      .then(reviews => this.criticReviews = reviews);
  }

  lessUserReviews = () => {
    if (this.userCount - 5 < 5) {
      this.userCount = 3;
    } else {
      this.userCount -= 5;
    }
    this.reviewService.fetchUserReviewsForMovie(this.movieId, this.userCount)
      .then(reviews => this.userReviews = reviews);
  }

  lessCriticReviews = () => {
    if (this.criticCount - 5 < 5) {
      this.criticCount = 3;
    } else {
      this.criticCount -= 5;
    }
    this.reviewService.fetchCriticReviewsForMovie(this.movieId, this.criticCount)
      .then(reviews => this.criticReviews = reviews);
  }

}
