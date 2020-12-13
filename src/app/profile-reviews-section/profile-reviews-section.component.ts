import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ReviewService} from '../../services/review-service';
import {UserService} from '../../services/user-service';

@Component({
  selector: 'app-profile-reviews-section',
  templateUrl: './profile-reviews-section.component.html',
  styleUrls: ['./profile-reviews-section.component.css']
})
export class ProfileReviewsSectionComponent implements OnInit {

  user = {username: ''};
  reviews = [];

  constructor(private activatedRoute: ActivatedRoute,
              private reviewService: ReviewService,
              private userService: UserService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const userId = params.userId;
      if (typeof params.userId !== 'undefined') {
        this.reviewService.fetchReviewsForUser(userId)
          .then(userReviews => this.reviews = userReviews);
        this.userService.getUserById(userId)
          .then(currUser => this.user = currUser);
      }
    });
  }

}
