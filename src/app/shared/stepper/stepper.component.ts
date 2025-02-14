import { Component, Input, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from '../dropdown/dropdown.component';

 
export interface StepConfig {
  label: string;
  fields: {
    name: string;
    placeholder: string;
    isDropdown?: boolean;
    options?: { value: string | number; viewValue: string }[];
    validators?: any[];
  }[];
}
 
@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
  ],
  standalone: true,
  imports: [
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    CommonModule,
    DropdownComponent
  ],
})
export class StepperComponent implements OnInit {
  private _formBuilder = inject(FormBuilder);
 
  @Input() stepsConfig: StepConfig[] = [];
  @Input() resetLabel: string = 'Reset';
 
  stepsFormGroups: FormGroup[] = [];
 
  ngOnInit(): void {
    this.initializeFormGroups();
  }
 
  private initializeFormGroups(): void {
    this.stepsFormGroups = this.stepsConfig.map((step) => {
      const group = this._formBuilder.group({});
      step.fields.forEach((field) => {
        group.addControl(field.name, this._formBuilder.control('', field.validators || []));
      });
      return group;
    });
  }
 
  isFirstStep(index: number): boolean {
    return index === 0;
  }
 
  isLastStep(index: number): boolean {
    return index === this.stepsConfig.length - 1;
  }
 
  isStepComplete(index: number): boolean {
    return this.stepsFormGroups[index].valid;
  }
}