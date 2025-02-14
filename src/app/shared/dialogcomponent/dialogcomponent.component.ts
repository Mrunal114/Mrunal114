import { Component, inject, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  DialogConfig,
  ReDialogComponent,
} from './redialogcomponent/redialogcomponent.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialogcomponent.component.html',
  styleUrls: ['./dialogcomponent.component.css'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    CommonModule,
    MatSelectModule,
  ],
})
export class DialogComponent {
  readonly dialog = inject(MatDialog);

  @Input() customclasses: string = '';
  @Input() dialogTitle: string = 'Default Title';
  @Input() dialogContent: string = 'Default Content';
  @Input() dialogFormFields: {
    name: string;
    label: string;
    value?: string;
    type: string;
    options?: { value: string; viewValue: string }[];
  }[] = [];

  @Input() buttonLabel: string = 'Open Dialog'; // Add a dynamic button label

  openDialog(): void {
    const dialogConfig: DialogConfig = {
      title: this.dialogTitle,
      content: this.dialogContent,
      formFields: this.dialogFormFields,
    };

    const dialogRef = this.dialog.open(ReDialogComponent, {
      data: dialogConfig,
      width: 'auto', // Adjust width dynamically
      maxWidth: '90vw', // Prevent exceeding viewport width
      maxHeight: '90vh', // Prevent exceeding viewport height
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('Form Data:', result);
      }
    });
  }
}
