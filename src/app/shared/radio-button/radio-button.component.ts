import { CommonModule } from '@angular/common';
import { Component,Input } from '@angular/core';



interface Option {
  value: string;
  rlabel:string;
}
@Component({
  selector: 'app-radio-button',
  imports: [CommonModule],
  templateUrl: './radio-button.component.html',
  styleUrl: './radio-button.component.css'
})
export class RadioButtonComponent {
@Input() label!:string;
@Input() options: Option[] = [];

}
