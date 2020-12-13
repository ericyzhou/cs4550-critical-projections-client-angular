import {Injectable} from '@angular/core';

const url = 'https://critical-projections-server.herokuapp.com/api';

@Injectable()
export class CommentService {
  fetchCommentsForReview = (rid: any, count: number) =>
    fetch(`${url}/reviews/${rid}/comments/${count}`)
      .then(response => response.json())

  fetchCommentsForUser = (uid: any) =>
    fetch(`${url}/users/${uid}/comments`)
      .then(response => response.json())

  createComment = (userId: number, reviewId: number, body: string) =>
    fetch(`${url}/comments`, {
      method: 'POST',
      body: JSON.stringify({userId, reviewId, body}),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json())

  updateComment = (comment: any) =>
    fetch(`${url}/comments/${comment.id}`, {
      method: 'PUT',
      body: JSON.stringify(comment),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json())

  deleteComment = (comment: any) =>
    fetch(`${url}/comments/${comment.id}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
}
