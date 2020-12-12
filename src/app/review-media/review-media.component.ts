import { Component, OnInit, Input } from '@angular/core';
import {CommentService} from '../../services/comment-service';
import {ReviewService} from '../../services/review-service';
import {CommonModule} from '@angular/common';
import {UserService} from '../../services/user-service';
import {repeat} from 'rxjs/operators';

@Component({
  selector: 'app-review-media',
  templateUrl: './review-media.component.html',
  styleUrls: ['./review-media.component.css']
})
export class ReviewMediaComponent implements OnInit {
  @Input() review: any;
  editing = false;
  comments: any[] = [];
  newComment = '';
  commentsToShow = 0;
  username = '';
  profilePic = '';

  constructor(private reviewService: ReviewService,
              private commentService: CommentService,
              private userService: UserService) { }

  ngOnInit(): void {
    if (typeof this.review !== 'undefined') {
      this.commentsToShow = 0;
      this.commentService.fetchCommentsForReview(this.review.id, this.commentsToShow)
        .then(comments => this.comments = comments);
      this.userService.getUserById(this.review.userId)
        .then(response => {
          this.username = response.username;
          this.profilePic = response.profilePic;
        });
    }
  }

  deleteReview = () => {
    this.reviewService.deleteReview(this.review.id)
      .then(status => alert(`Deleted review ${this.review.id}`));
  }

  editReview = () => {
    this.editing = true;
  }

  postComment = () => {
    this.commentService.createComment(this.review.id, this.newComment)
      .then(response => this.comments.push(response));
    this.newComment = '';
  }

  update = () => {
    console.log(this.review);
    this.reviewService.updateReview(this.review)
      .then(response => this.review = response)
      .then(r => this.editing = false);
  }

  moreComments = () => {
    this.commentsToShow += 3;
    this.commentService.fetchCommentsForReview(this.review.id, this.commentsToShow)
      .then(comments => this.comments = comments);
  }

  fewerComments = () => {
    this.commentsToShow -= 3;
    if (this.commentsToShow < 0) {
      this.commentsToShow = 0;
    }
    this.commentService.fetchCommentsForReview(this.review.id, this.commentsToShow)
      .then(comments => this.comments = comments);
  }
}
