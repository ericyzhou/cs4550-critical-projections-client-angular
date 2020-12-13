import {Component, Input, OnInit} from '@angular/core';
import {CommentService} from '../../services/comment-service';
import {UserService} from '../../services/user-service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() comment: any;
  username = '';
  profilePic = '';

  constructor(private commentService: CommentService,
              private userService: UserService) { }

  ngOnInit(): void {
    if (this.commentService !== undefined) {
      this.userService.getUserById(this.comment.userId)
        .then(response => {
          this.username = response.username;
          this.profilePic = response.profilePic;
        });
    }
  }

  deleteComment = () => {
    this.commentService.deleteComment(this.comment.id)
      .then(result => alert(`Deleted comment ${this.comment.id}`));
  }

}
