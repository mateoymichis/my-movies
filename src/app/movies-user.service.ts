import { Injectable } from '@angular/core';
import { Movie } from './movies-list/Movie';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesUserService {
  private _userList: Movie[] = [];

  userList: BehaviorSubject<Movie[]> = new BehaviorSubject(this._userList);

  constructor() { }

  addToUserMovies(movie: Movie) {
    let item: any = this._userList.find(
      (v1) => v1.title == movie.title
    );
    if(!item) {
      this._userList.push({...movie})
    } else {
      item.userRating = movie.userRating;
    }
    console.log(movie);
    this.userList.next(this._userList);
  }
}
