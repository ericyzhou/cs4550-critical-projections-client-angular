import {Component, OnInit, Input, Output} from '@angular/core';
import {CommentService} from '../../services/comment-service';
import {ReviewService} from '../../services/review-service';
import {CommonModule} from '@angular/common';
import {UserService} from '../../services/user-service';
import {repeat} from 'rxjs/operators';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-review-media',
  templateUrl: './review-media.component.html',
  styleUrls: ['./review-media.component.css']
})
export class ReviewMediaComponent implements OnInit {
  @Input() review: any;
  @Output()
  deleteEvent = new EventEmitter();
  editing = false;
  comments: any[] = [];
  newComment = '';
  commentsToShow = 0;
  username = '';
  profilePic = '';
  sameUser = false;
  admin = false;

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
      this.userService.getCurrentUser()
        .then(response => {
          if (response.response === 0) {
          } else {
            this.admin = response.user.role === 'admin';
            this.sameUser = response.user.id === this.review.userId;
          }
        });
    }
  }

  deleteReview = () => {
    this.reviewService.deleteReview(this.review)
      .then(status => this.deleteEvent.emit(null));
  }

  editReview = () => {
    this.editing = true;
  }

  postComment = () => {
    this.userService.getCurrentUser()
      .then(response => {
        if (response.response === 0) {
          alert('You must be logged in to post a comment');
          this.newComment = '';
        } else {
          this.commentService.createComment(response.user.id, this.review.id, this.newComment)
            .then(resp =>
          {
            this.comments.push(resp);
            this.newComment = '';
          }
          );
        }
      });
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

  reload = () => {
    this.commentService.fetchCommentsForReview(this.review.id, this.commentsToShow)
      .then(comments => this.comments = comments);
  }


  showEditAndDelete(): boolean {
    return this.sameUser || this.admin;
  }
}
