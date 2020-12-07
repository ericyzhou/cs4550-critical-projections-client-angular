import { Component, OnInit, Input } from '@angular/core';
import {CommentService} from '../../services/comment-service';
import {ReviewService} from '../../services/review-service';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-review-media',
  templateUrl: './review-media.component.html',
  styleUrls: ['./review-media.component.css']
})
export class ReviewMediaComponent implements OnInit {
  @Input() review: any;
  rating = 1;
  editting = false;
  comments: any[] = [];
  newComment = '';

  constructor(private reviewService: ReviewService,
              private commentService: CommentService) { }

  ngOnInit(): void {
    if (typeof this.review !== 'undefined') {
      this.commentService.fetchCommentsForReview(this.review.id)
        .then(comments => this.comments = comments);
    }
  }

  deleteReview = () => {
    this.reviewService.deleteReview(this.review.id)
      .then(status => alert(`Deleted review ${this.review.id}`));
  }

  editReview = () => {
    this.editting = true;
  }

  deleteComment = (cid: any) => {
    this.commentService.deleteComment(cid)
      .then(status => alert(`Deleted review ${cid}`));
  }

  postComment = () => {
    this.commentService.createComment(this.review.id, this.newComment)
      .then(response => this.comments.push(response));
    this.newComment = '';
  }
}
