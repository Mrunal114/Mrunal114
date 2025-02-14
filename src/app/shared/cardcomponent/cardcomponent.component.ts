import { Component ,Input, TemplateRef} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { SelectFieldComponent } from '../select-field/select-field.component';
import { InputfieldComponent } from '../inputfield/inputfield.component';
import { CommonModule } from '@angular/common';
import { title } from 'process';

interface Dropdown {
  title: string;
  
}
@Component({
  selector: 'app-cardcomponent',
  imports: [MatCardModule,
    CommonModule
    
  ],
  templateUrl: './cardcomponent.component.html',
  styleUrl: './cardcomponent.component.css'
})
export class CardcomponentComponent {
 @Input() contentTemplate !:TemplateRef<any>;
 @Input() title='';
 cardOpen = false;
 
 


 toggleDropdown(event: Event) {
  this.cardOpen = !this.cardOpen;
  event.stopPropagation(); // Prevent click from closing the dropdown immediately
}
//  @Input() cardSetting:any;

 
 
 

}
