import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent {
  @Input() rating: number = 0;
  @Output() ratingChange: EventEmitter<number> = new EventEmitter<number>();
  stars: boolean[] = Array(5).fill(false);

  ngOnInit() {
    this.updateStars(this.rating);
  }

  updateStars(rating: number) {
    this.stars = this.stars.map((_, index) => index < rating);
  }

  setRating(rating: number) {
    this.rating = rating;
    this.updateStars(rating);
    this.ratingChange.emit(this.rating);
  }
}
