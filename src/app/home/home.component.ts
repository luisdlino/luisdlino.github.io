import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../models/movie.model';
import { HttpService } from '../services/http-service.service';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  movies: Array<Movie> = [];
  watchList: Array<number> = [];
  sortedTitle = false;
  sortedDate = false;

  constructor(private httpService: HttpService,
    private router: Router,
    private movieService: MovieService) {}

  ngOnInit() {
    this.httpService.getAllMovies().subscribe((res: any) => {
      this.movies = res;
      this.watchList = this.movieService.returnWatchList() || [];
    })
  }

  sortMoviesByTitle() {
    this.movies.sort((a, b) => {
      const nameA = a.title.toUpperCase();
      const nameB = b.title.toUpperCase();
      if (nameA < nameB) {
        return !this.sortedTitle ? -1 : 1 ;
      }
      if (nameA > nameB) {
        return !this.sortedTitle ? 1 : -1;
      }
      return 0;
    })
    this.sortedTitle = !this.sortedTitle;
  }

  sortMoviesByDate() {
    this.movies.sort((a, b) => {
      const dateA = new Date(a.released_date);
      const dateB = new Date(b.released_date);
      if (dateA > dateB) {
        return !this.sortedTitle ? -1 : 1 ;
      }
      if (dateA < dateB) {
        return !this.sortedTitle ? 1 : -1;
      }
      return 0;
    })
    this.sortedTitle = !this.sortedTitle;
  }

  addToWatchList(id: number) {
    if (!this.watchList.includes(id)) {
      this.watchList.push(id);
      this.movieService.setWatchList(this.watchList)
    }
  }

  goToMovie(movie: Movie) {
    this.movieService.setMovie(movie);
    this.router.navigate(['details']);
  }
}
