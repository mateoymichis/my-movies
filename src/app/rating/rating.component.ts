import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.scss'
})
export class RatingComponent {
  faStar = faStar;

  @Input()
  rating: number = 0;

  @Output()
  ratingChange: EventEmitter<number> = new EventEmitter<number>();

  updateRating(): void {
    this.ratingChange.emit(this.rating);
    console.log(this.rating);
  }
}
