import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
 
@Component({
  selector: 'app-input-field',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, CommonModule],
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.css',
})
export class InputFieldComponent {
  @Input() label: string = 'Enter text';
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() error: string = '';
  @Input() customclasses: string = '';
}
 
 