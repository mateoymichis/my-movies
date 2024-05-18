import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MymoviesMainComponent } from './mymovies-main/mymovies-main.component';
import { MymoviesAboutComponent } from './mymovies-about/mymovies-about.component';

const routes: Routes = [
  {path: '', redirectTo: 'movies', pathMatch: 'full'},
  {path: 'movies', component: MymoviesMainComponent},
  {path: 'about', component: MymoviesAboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
