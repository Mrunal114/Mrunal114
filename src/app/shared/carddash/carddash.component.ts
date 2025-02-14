import { Component, Input  } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-carddash',
  imports: [CommonModule],
  templateUrl: './carddash.component.html',
  styleUrl: './carddash.component.css'
})
export class CarddashComponent {
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() value!: string;
  @Input() color!: string;
  get bgColor() {
    return {
      'bg-yellow-500': this.color === 'yellow',
      'bg-green-600': this.color === 'green',
      'bg-red-600': this.color === 'red',
    };
  }
  
}

