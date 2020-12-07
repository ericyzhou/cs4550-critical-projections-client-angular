import {Injectable} from '@angular/core';

@Injectable()
export class CommentService {
  fetchCommentsForReview = (rid: any) =>
    fetch(`http://localhost:8080/api/reviews/${rid}/comments`)
      .then(response => response.json())

  fetchCommentsForUser = (uid: any) =>
    fetch(`http://localhost:8080/api/users/${uid}/comments`)
      .then(response => response.json())

  createComment = (reviewId: number, body: string) =>
    fetch(`http://localhost:8080/api/comments`, {
      method: 'POST',
      body: JSON.stringify({reviewId, body}),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json())

  updateComment = (comment: any) =>
    fetch(`http://localhost:8080/api/comments/${comment.id}`, {
      method: 'PUT',
      body: JSON.stringify(comment),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json())

  deleteComment = (comment: any) =>
    fetch(`http://localhost:8080/api/comments/${comment.id}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
}
