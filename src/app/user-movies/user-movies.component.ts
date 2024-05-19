import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../movies-list/Movie';
import { MoviesUserService } from '../movies-user.service';

@Component({
  selector: 'app-user-movies',
  templateUrl: './user-movies.component.html',
  styleUrl: './user-movies.component.scss'
})
export class UserMoviesComponent {
  userList$: Observable<Movie[]>;

  constructor(private userMovies: MoviesUserService) {
    this.userList$ = userMovies.userList.asObservable();
  }
}
