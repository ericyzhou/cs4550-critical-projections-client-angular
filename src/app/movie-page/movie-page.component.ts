import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IMDBSearchService} from '../../services/IMDBSearchService';
import {ReviewService} from '../../services/review-service';
import {CommentService} from '../../services/comment-service';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css']
})
export class MoviePageComponent implements OnInit {
  arr: { [key: string]: any; } = {};
  commentBfr: { [key: string]: any; } = {};
  movie: any;
  reviews: any[] = [];
  rating = 1;
  title = '';
  body = '';

  constructor(private activatedRoute: ActivatedRoute,
              private imdbService: IMDBSearchService,
              private reviewService: ReviewService,
              private commentService: CommentService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const movieId = params.movieId;
      if (typeof movieId !== 'undefined') {
        this.imdbService.findMovieById(movieId)
          .then(movie => this.movie = movie);
        this.reviewService.fetchReviewsForMovie(movieId)
          .then(reviews => this.reviews = reviews)
          .then(v =>
            this.reviews.forEach((review) => {
              this.commentBfr[review.id] = '';
              this.commentService.fetchCommentsForReview(review.id)
              .then(comments => this.arr[review.id] = comments);
          }));
      }
    });
  }

  deleteReview = (rid: any) => {
    this.reviewService.deleteReview(rid)
    .then(status => this.reviews = this.reviews.filter(r => r.id !== rid));
  }

  deleteComment = (rid: any, cid: any) => {
    this.commentService.deleteComment(cid)
      .then(status => this.arr[rid] = this.arr[rid].filter((c: any) => c.id !== cid));
  }

  postReview = () => {
    this.reviewService.createReview(this.title, this.body, this.rating, this.movie.imdbID)
      .then(response => this.reviews.push(response));
    this.title = '';
    this.body = '';
    this.rating = 1;
  }

  postComment = (rid: any) => {
    this.commentService.createComment(rid, this.commentBfr[rid])
      .then(response => this.arr[rid].push(response));
    this.commentBfr[rid] = '';
  }
}
