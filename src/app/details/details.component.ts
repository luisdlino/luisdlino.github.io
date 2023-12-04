import { Component, Input } from '@angular/core';
import { Movie } from '../models/movie.model';
import { MovieService } from '../services/movie.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {

  movie!: Movie;
  safeURL: any = '';
  watchList: Array<number> = [];

  constructor(private movieService: MovieService, private _sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.movie = this.movieService.getMovie();
    this.watchList = this.movieService.returnWatchList();
    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(this.movie.trailer_link);
  }

  addToWatchList() {
    !this.watchList.includes(this.movie.id) ? this.watchList.push(this.movie.id) : this.watchList.splice(this.watchList.indexOf(this.movie.id), 1);
    this.movieService.setWatchList(this.watchList)
  }
}
