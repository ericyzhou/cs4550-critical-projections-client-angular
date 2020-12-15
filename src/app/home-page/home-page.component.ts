import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user-service';
import {Router} from '@angular/router';
import {ReviewService} from '../../services/review-service';
import {CommentService} from '../../services/comment-service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  searchTerm = '';
  userLoggedIn = false;
  currentUser = {id: 0, username: '', password: '', email: '', role: '', profilePic: ''};
  topUserReviews = [];
  topUserComments = [];
  topReviews = [];

  constructor(private userService: UserService,
              private reviewService: ReviewService,
              private commentService: CommentService,
              private router: Router) { }

  searchMovie = () => {
    this.router.navigate([`/search/${this.searchTerm}`])
      .then(response => console.log(response));

  }

  handleKeyPress = (target: { charCode: number; }) => {
    if (target.charCode === 13) {
      this.searchMovie();
    }
  }

  getTopN = (wholeList: any[], count: number) => {
    return wholeList.slice(0, count);
  }

  ngOnInit(): void {
    this.userLoggedIn = false;
    this.currentUser = {id: 0, username: '', password: '', email: '', role: '', profilePic: ''};
    this.userService.getCurrentUser()
      .then(response => {
        if (response.response === 1) {
          this.userLoggedIn = true;
          this.currentUser = response.user;
          this.reviewService.fetchReviewsForUser(response.user.id)
            .then(reviews => {
              this.topUserReviews = reviews;
              console.log(reviews);
            });
          this.commentService.fetchCommentsForUser(response.user.id)
            .then(comments => this.topUserComments = comments);
        } else {
          this.userLoggedIn = false;
          this.currentUser = {id: 0, username: '', password: '', email: '', role: '', profilePic: ''};
        }});
    this.reviewService.fetchReviews(5)
      .then(topFive => this.topReviews = topFive);
  }

}
