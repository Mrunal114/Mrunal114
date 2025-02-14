import { Component, CUSTOM_ELEMENTS_SCHEMA, Input,Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
 
@Component({
  selector: 'app-inputfield',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, CommonModule],
  templateUrl: './inputfield.component.html',
  styleUrl: './inputfield.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class InputfieldComponent {
  @Input() label: string = '';
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() error: string = '';
  @Input() value: string = '';
  @Input() customclasses!: string;
  @Input() inputfieldstyle!: string;
  @Output() valueChange = new EventEmitter<string>(); // Emit value changes
 
  onValueChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
    this.valueChange.emit(this.value); // Emit the new value
  }
}
