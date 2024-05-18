import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { UserMoviesComponent } from './user-movies/user-movies.component';
import { MymoviesMainComponent } from './mymovies-main/mymovies-main.component';
import { MymoviesAboutComponent } from './mymovies-about/mymovies-about.component';
import { RatingComponent } from './rating/rating.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    UserMoviesComponent,
    MymoviesMainComponent,
    MymoviesAboutComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
