import {
  Component,
  HostListener,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { CommonModule } from '@angular/common';

interface Option {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-dd',
  templateUrl: './dd.component.html',
  styleUrls: ['./dd.component.css'],
  imports: [CommonModule],
})
export class DdComponent {
  @Input() label!: string;
  @Input() ddstyle!: string;
  @Input() customclasses!: string;
  @Input() value!: string; // Bind the selected value
  @Output() valueChange = new EventEmitter<string>(); // Emit value changes
  @Input() options: Option[] = [];

  dropdownOpen = false;
  selectedValue = '';

  toggleDropdown(event: Event) {
    this.dropdownOpen = !this.dropdownOpen;
    event.stopPropagation(); // Prevent click from closing the dropdown immediately
  }

  closeDropdown(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.relative')) {
      this.dropdownOpen = false;
    }
  }

  selectOption(value: string) {
    this.value = value;
    this.valueChange.emit(this.value); // Emit the selected value
    this.dropdownOpen = false;
  }
}
