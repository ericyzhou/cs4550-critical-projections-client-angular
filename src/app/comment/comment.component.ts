import {Component, Input, OnInit} from '@angular/core';
import {CommentService} from '../../services/comment-service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() comment: any;

  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
  }

  deleteComment = () => {
    this.commentService.deleteComment(this.comment.id)
      .then(result => alert(`Deleted comment ${this.comment.id}`));
  }

}
