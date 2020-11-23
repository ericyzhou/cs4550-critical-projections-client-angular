import {Injectable} from '@angular/core';

@Injectable()
export class IMDBSearchService {
  findMovieByTitle = (movieTitle: any) =>
    fetch(`http://www.omdbapi.com/?apikey=b41175d7&type=movie&s=${movieTitle}`)
      .then(response => response.json())

  findMovieById = (movieId: any) =>
    fetch(`http://www.omdbapi.com/?apikey=b41175d7&plot=full&i=${movieId}`)
      .then(response => response.json())
}
