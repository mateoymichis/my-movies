import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from './movies-list/Movie';
import { Observable, tap } from 'rxjs';

const URL = 'https://6647a26a2bb946cf2f9e6d3c.mockapi.io/api/v1/movies/';

@Injectable({
  providedIn: 'root'
})
export class MoviesDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Movie[]> {
    return this.http.get<Movie[]>(URL).pipe(
      tap((movies: Movie[]) => movies.forEach(movie => movie.userRating = 0))
    );
  }
}
