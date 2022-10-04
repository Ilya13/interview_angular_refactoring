import { Injectable } from "@angular/core";
import { delay, Observable, of } from "rxjs";
import { MOCK_MOVIES } from "./const";
import { Movie } from "./models";

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  getMovies(): Observable<Movie[]> {
    return of(MOCK_MOVIES).pipe(delay(1000));
  }
}