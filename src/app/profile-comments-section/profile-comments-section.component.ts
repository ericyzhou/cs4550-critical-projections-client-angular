import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ReviewService} from '../../services/review-service';
import {UserService} from '../../services/user-service';
import {CommentService} from '../../services/comment-service';

@Component({
  selector: 'app-profile-comments-section',
  templateUrl: './profile-comments-section.component.html',
  styleUrls: ['./profile-comments-section.component.css']
})
export class ProfileCommentsSectionComponent implements OnInit {

  user = {username: ''};
  comments = [];

  constructor(private activatedRoute: ActivatedRoute,
              private commentService: CommentService,
              private userService: UserService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const userId = params.userId;
      if (typeof params.userId !== 'undefined') {
        this.commentService.fetchCommentsForUser(userId)
          .then(userComments => this.comments = userComments);
        this.userService.getUserById(userId)
          .then(currUser => this.user = currUser);
      }
    });
  }

}
