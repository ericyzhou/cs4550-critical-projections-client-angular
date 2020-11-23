import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IMDBSearchService} from '../../services/IMDBSearchService';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css']
})
export class MoviePageComponent implements OnInit {
  movie: any;

  constructor(private activatedRoute: ActivatedRoute,
              private imdbService: IMDBSearchService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const movieId = params.movieId;
      if (typeof movieId !== 'undefined') {
        this.imdbService.findMovieById(movieId)
          .then(movie => this.movie = movie);
      }
    });
  }

}
