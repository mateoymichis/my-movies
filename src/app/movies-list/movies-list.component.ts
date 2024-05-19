import { Component } from '@angular/core';
import { Movie } from './Movie';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { MoviesUserService } from '../movies-user.service';
import { MoviesDataService } from '../movies-data.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.scss'
})
export class MoviesListComponent {
  faStar = faStar;
  movies: Movie[] = [];

  constructor(
    private userMovies: MoviesUserService,
    private moviesService: MoviesDataService
  ) { }

  ngOnInit(): void {
    this.moviesService.getAll().subscribe(data => this.movies = data)
  }

  addToUserMovies(movie: Movie) {
    this.userMovies.addToUserMovies(movie);
  }
}
