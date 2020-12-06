import {Injectable} from '@angular/core';

@Injectable()
export class ReviewService {
  fetchReviewsForMovie = (mid: any) =>
    fetch(`http://localhost:8080/api/movies/${mid}/reviews`)
      .then(response => response.json())

  fetchReviewsForUser = (uid: any) =>
    fetch(`http://localhost:8080/api/users/${uid}/reviews`)
      .then(response => response.json())

  createReview = (review: any) =>
    fetch(`http://localhost:8080/api/reviews`, {
      method: 'POST',
      body: JSON.stringify(review),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json())

  updateReview = (review: any) =>
    fetch(`http://localhost:8080/api/reviews/${review.id}`, {
      method: 'PUT',
      body: JSON.stringify(review),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json())

  deleteReview = (review: any) =>
    fetch(`http://localhost:8080/api/reviews/${review.id}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
}
