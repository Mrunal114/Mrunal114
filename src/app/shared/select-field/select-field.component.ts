import { Component ,Input} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';

import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-select-field',
  imports: [MatFormFieldModule,MatSelectModule, MatInputModule, FormsModule,CommonModule],
  templateUrl: './select-field.component.html',
  styleUrl: './select-field.component.css'
})
export class SelectFieldComponent {
  @Input() label:string ='';
  value: number | null = null;
    options = [
      {label: 'Select', value: null},
      {label: 'Active', value: 1},
      {label: 'InActive', value: 2},
      
    ];

}
