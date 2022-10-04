import { Component } from "@angular/core";
import { Movie } from "./models";
import { MoviesService } from "./movies.service";

@Component({
  selector: 'app-movies',
  templateUrl: 'movies.component.html',
  styleUrls: ['movies.component.css'],
})
export class MoviesComponent {
  movies: Movie[] | undefined;

  constructor(moviesService: MoviesService) {
    moviesService.getMovies().subscribe(movies => this.movies = movies);
  }

}