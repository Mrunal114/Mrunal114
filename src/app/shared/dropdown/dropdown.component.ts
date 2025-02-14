import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatOption, MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';

interface Option {
  value: any;
  viewValue: string;
}

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    MatOption,
    CommonModule,
  ],
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
})
export class DropdownComponent {
  @Input() label: string = ''; // Label for the select field
  @Input() options: Option[] = []; // Array of options
  @Input() selectedValue: any; // The selected value
  @Input() error: string = ''; // Error message
  @Output() selectionChange = new EventEmitter<any>(); // Event for selection change

  onSelectionChange(value: any) {
    this.selectionChange.emit(value);
  }
}
