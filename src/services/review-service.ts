import {Injectable} from '@angular/core';

const url = 'https://critical-projections-server.herokuapp.com/api';

@Injectable()
export class ReviewService {
  fetchReviewsForMovie = (mid: any, count: number) =>
    fetch(`${url}/movies/${mid}/reviews/${count}`)
      .then(response => response.json())

  fetchReviews = (count: number) =>
    fetch(`${url}/reviews/${count}`)
      .then(response => response.json())

  fetchCriticReviewsForMovie = (mid: any, count: number) =>
    fetch(`${url}/movies/${mid}/reviews/critic/${count}`)
      .then(response => response.json())

  fetchUserReviewsForMovie = (mid: any, count: number) =>
    fetch(`${url}/movies/${mid}/reviews/user/${count}`)
      .then(response => response.json())

  fetchMovieScore = (mid: any) =>
    fetch(`${url}/movies/${mid}/score`)
      .then(response => response.json())

  fetchReviewsForUser = (uid: any) =>
    fetch(`${url}/users/${uid}/reviews`)
      .then(response => response.json())

  createReview = (userId: number, title: string, body: string, rating: number, movieId: string, criticReview: boolean) =>
    fetch(`${url}/reviews`, {
      method: 'POST',
      body: JSON.stringify({movieId, userId, rating, title, body, likes: 0, criticReview, approved: true}),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json())

  updateReview = (review: any) =>
    fetch(`${url}/reviews/${review.id}`, {
      method: 'PUT',
      body: JSON.stringify(review),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json())

  deleteReview = (review: any) =>
    fetch(`${url}/reviews/${review.id}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
}
