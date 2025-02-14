import { Component, Input  } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-subdropdown',
  imports: [CommonModule],
  templateUrl: './subdropdown.component.html',
  styleUrl: './subdropdown.component.css',

})
export class SubdropdownComponent {
  @Input() title!: string;
  @Input() items: string[] = []; 
}
