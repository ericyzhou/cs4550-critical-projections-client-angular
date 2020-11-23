import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IMDBSearchService} from '../../services/IMDBSearchService';

@Component({
  selector: 'app-imdb-search',
  templateUrl: './imdb-search.component.html',
  styleUrls: ['./imdb-search.component.css']
})
export class ImdbSearchComponent implements OnInit {
  searched = false;
  searchTerm = '';
  results: any;
  constructor(private activatedRoute: ActivatedRoute,
              private imdbService: IMDBSearchService) { }

  ngOnInit(): void {
  }

  searchMovie = () => {
    this.imdbService.findMovieByTitle(this.searchTerm)
      .then(results => this.results = results);
  }

  handleKeyPress = (target: { charCode: number; }) => {
    if (target.charCode === 13) {
      this.searchMovie();
    }
  }

}
