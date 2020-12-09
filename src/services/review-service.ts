import {Injectable} from '@angular/core';

@Injectable()
export class ReviewService {
  fetchReviewsForMovie = (mid: any, count: number) =>
    fetch(`http://localhost:8080/api/movies/${mid}/reviews/${count}`)
      .then(response => response.json())

  fetchCriticReviewsForMovie = (mid: any, count: number) =>
    fetch(`http://localhost:8080/api/movies/${mid}/reviews/critic/${count}`)
      .then(response => response.json())

  fetchUserReviewsForMovie = (mid: any, count: number) =>
    fetch(`http://localhost:8080/api/movies/${mid}/reviews/user/${count}`)
      .then(response => response.json())

  fetchReviewsForUser = (uid: any) =>
    fetch(`http://localhost:8080/api/users/${uid}/reviews`)
      .then(response => response.json())

  createReview = (title: string, body: string, rating: number, movieId: string) =>
    fetch(`http://localhost:8080/api/reviews`, {
      method: 'POST',
      body: JSON.stringify({movieId, rating, Title: title, body}),
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
