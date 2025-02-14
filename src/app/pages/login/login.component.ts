import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Form, FormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../shared/button/button.component';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
//import { CardComponent } from '../../shared/card/card.component';
import { CheckboxComponent } from '../../shared/checkbox/checkbox.component';
import { StepperComponent } from '../../shared/stepper/stepper.component';
import { TableComponent } from '../../shared/table/table.component';
import { DropdownComponent } from '../../shared/dropdown/dropdown.component';
import { TreeComponent } from "../../shared/tree/tree.component";

import { DatepickerComponent } from '../../shared/datepicker/datepicker.component';
import { InputfieldComponent } from '../../shared/inputfield/inputfield.component';
import { CardComponent } from '../../shared/card/card.component';
export interface StepConfig {
  label: string; // Label for the step
  fields: {
    name: string; // Form control name
    placeholder: string; // Input placeholder
    validators?: any[]; // Validators for the field
  }[]; // Array of form fields
  errorMessage?: string; // Optional error message for the step
}

@Component({
  selector: 'app-login',
  imports: [
    FormsModule,
    CommonModule,
    ButtonComponent,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,

    MatLabel,
    InputfieldComponent,
    CardComponent,
    // ErrMsgComponent,
    DropdownComponent,
    TableComponent,
    TreeComponent,

    //MatLabel,

    //CardComponent,
    CheckboxComponent,
    StepperComponent,
    TableComponent,
    DropdownComponent,
    DatepickerComponent,
    TableComponent,
    TreeComponent,
    CardComponent,
  ],

  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private router: Router) {}

  onLogin() {
    // Simulate login and navigate
    this.router.navigate(['/mainlayout/dashboard']);
  }

  steps: StepConfig[] = [
    {
      label: 'Fill out your name',
      fields: [
        {
          name: 'firstCtrl',
          placeholder: 'Last name, First name',
          validators: [Validators.required],
        },
      ],
      errorMessage: 'Name is required.',
    },
    {
      label: 'Fill out your address',
      fields: [
        {
          name: 'secondCtrl',
          placeholder: 'Address',
          validators: [Validators.required],
        },
      ],
      errorMessage: 'Address is required.',
    },
    {
      label: 'Fill out your phone number',
      fields: [
        {
          name: 'phoneCtrl',
          placeholder: 'Phone Number',
          validators: [Validators.required, Validators.minLength(10)],
        },
      ],
      errorMessage: 'Phone number is required.',
    },
    {
      label: 'Done',
      fields: [],
    },
  ];
}
