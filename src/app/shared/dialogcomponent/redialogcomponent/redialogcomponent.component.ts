import { Component, inject, Input } from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogModule,
} from '@angular/material/dialog';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule, NgFor } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { InputFieldComponent } from '../../input-field/input-field.component';

export interface DialogConfig {
  title: string;
  content: string;
  formFields: {
    name: string;
    label: string;
    value?: string; // Optional default value
    type: string; // 'text' or 'dropdown'
    options?: { value: string; viewValue: string }[]; // Dropdown options
  }[];
}

@Component({
  selector: 'reusable-dialog',
  templateUrl: './redialogcomponent.component.html',
  styleUrls: ['./redialogcomponent.component.css'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    NgFor,
    MatSelectModule,
    FormsModule,
    CommonModule,
    //InputFieldComponent
  ],
})
export class ReDialogComponent {
  readonly dialogRef = inject(MatDialogRef<ReDialogComponent>);
  readonly data = inject<DialogConfig>(MAT_DIALOG_DATA);
  form: FormGroup;

  @Input() customclasses: string = '';

  constructor(private fb: FormBuilder) {
    // Initialize form group dynamically
    this.form = this.fb.group(
      this.data.formFields.reduce((controls, field) => {
        controls[field.name] = [field.value || ''];
        return controls;
      }, {} as { [key: string]: any })
    );
  }

  onCancel(): void {
    this.dialogRef.close(); // Close dialog without returning data
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value); // Return form data
    }
  }
}
