import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { UserMoviesComponent } from './user-movies/user-movies.component';
import { MymoviesMainComponent } from './mymovies-main/mymovies-main.component';
import { MymoviesAboutComponent } from './mymovies-about/mymovies-about.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    UserMoviesComponent,
    MymoviesMainComponent,
    MymoviesAboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
