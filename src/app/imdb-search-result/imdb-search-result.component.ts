import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IMDBSearchService} from '../../services/IMDBSearchService';

@Component({
  selector: 'app-imdb-search-result',
  templateUrl: './imdb-search-result.component.html',
  styleUrls: ['./imdb-search-result.component.css']
})
export class ImdbSearchResultComponent implements OnInit {

  searched = false;
  results = {Search: [{Poster: '', Title: '', imdbID: '', Year: ''}], Response: 'False'};

  constructor(private activatedRoute: ActivatedRoute,
              private imdbSearchService: IMDBSearchService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params.movieTitle) {
        this.imdbSearchService.findMovieByTitle(params.movieTitle)
          .then(results => {this.results = results; this.searched = true; });
      } else {
        this.searched = false;
      }
    });
  }

}
