import { Component } from '@angular/core';
import { Movie } from './Movie';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { MoviesUserService } from '../movies-user.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.scss'
})
export class MoviesListComponent {
  faStar = faStar;
  movies: Movie[] = [
    {
      title: "Nueve reinas",
      director: "Fabián Bielinsky",
      sinopsis: "Dos estafadores intentan jugársela a un coleccionista de sellos vendiéndole una hoja de sellos raros falsificados (las \"Nueve Reinas\").",
      duration: 115,
      year: 2000,
      image: "assets/img/nueve-reinas.jpg",
      rating: 4.5,
      userRating: 0
    },
    {
      title: "El padrino",
      director: "Francis Ford Coppola",
      sinopsis: "El patriarca de una organización criminal transfiere el control de su clandestino imperio a su reacio hijo.",
      duration: 175,
      year: 1972,
      image: "assets/img/el-padrino.jpg",
      rating: 4.9,
      userRating: 0
    },
    {
      title: "El padrino (parte II)",
      director: "Francis Ford Coppola",
      sinopsis: "Relato de la vida temprana y la carrera de Vito Corleone en la ciudad de Nueva York en 1920, mientras que su hijo, Michael, se expande y refuerza su control sobre el sindicato de delitos familiares.",
      duration: 202,
      year: 1974,
      image: "assets/img/el-padrino-2.jpg",
      rating: 4.9,
      userRating: 0
    },
  ];

  constructor(
    private userMovies: MoviesUserService 
  ) { }

  addToUserMovies(movie: Movie) {
    this.userMovies.addToUserMovies(movie);
  }
}
