import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movie!: Movie;
  private storage: Storage;

  constructor(){
    this.storage = window.localStorage;
  }

  setMovie(movie: Movie) {
    this.movie = movie;
  }

  getMovie() {
    return this.movie;
  }

  setWatchList(value: any) {
    this.storage.setItem('watchList', JSON.stringify(value));
  }

  returnWatchList(): any {
    if (this.storage) {
      return JSON.parse(this.storage.getItem('watchList') || '');
    }
    return null;
  }
}
