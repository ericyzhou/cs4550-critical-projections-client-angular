import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-imdb-search',
  templateUrl: './imdb-search.component.html',
  styleUrls: ['./imdb-search.component.css']
})
export class ImdbSearchComponent implements OnInit {

  searchTerm = '';

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) { }

  searchMovie = () => {
    this.router.navigate([`/search/${this.searchTerm}`])
      .then();
  }

  handleKeyPress = (target: { charCode: number; }) => {
    if (target.charCode === 13) {
      this.searchMovie();
    }
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params.movieTitle) {
        this.searchTerm = params.movieTitle;
      }
    });
  }


}
