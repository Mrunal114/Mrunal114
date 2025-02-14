import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-card',
  imports: [MatCardModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() title: string = 'Card Title'; // Title for the card
  @Input() description: string = 'This is a beautiful card description.'; // Card content
  @Input() imageUrl: string = ''; // Optional image URL
  @Input() buttonLabel: string = 'Learn More'; // Button label
}
