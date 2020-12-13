import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommentService} from '../../services/comment-service';
import {UserService} from '../../services/user-service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() comment: any;
  @Output()
  deleteCommentEvent = new EventEmitter();
  username = '';
  profilePic = '';
  isAdmin = false;
  sameUser = false;

  constructor(private commentService: CommentService,
              private userService: UserService) { }

  ngOnInit(): void {
    if (this.comment !== undefined) {
      this.userService.getUserById(this.comment.userId)
        .then(response => {
          this.username = response.username;
          this.profilePic = response.profilePic;
        });
      this.userService.getCurrentUser()
        .then(response => {
          if (response.response === 0) {
          } else {
            this.isAdmin = response.user.role === 'admin';
            this.sameUser = response.user.id === this.comment.userId;
          }
        });
    }
  }

  deleteComment = () => {
    this.commentService.deleteComment(this.comment)
      .then(result => this.deleteCommentEvent.emit(null));
  }

  showDelete(): boolean {
    return this.isAdmin || this.sameUser;
  }
}
