import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DropdownComponent } from '../../shared/dropdown/dropdown.component';
import { InputFieldComponent } from '../../shared/input-field/input-field.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCheckbox } from '@angular/material/checkbox';
import { ButtonComponent } from '../../shared/button/button.component';
import { InputfieldComponent } from "../../shared/inputfield/inputfield.component";
import { DdComponent } from "../../shared/dd/dd.component";


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  imports: [DropdownComponent, InputFieldComponent,
    MatStepperModule, // Import MatStepperModule
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatCheckbox,
    ButtonComponent, InputfieldComponent, DdComponent]
})

export class RegistrationComponent implements OnInit {
 
  registrationForm!: FormGroup;
  statusOptions = [
    { value: 'Active', viewValue: 'Active' },
    { value: 'Inactive', viewValue: 'Inactive' },
    { value: 'Pending', viewValue: 'Pending' }
  ];
  selectedStatus = '';
  OgtypeOptions = [
    { value: 'OrgType1', viewValue: 'OrgType1' },
    { value: 'OrgType2', viewValue: 'OrgType2' },
    { value: 'OrgType3', viewValue: 'OrgType3' }
  ];
  selectedOrgtype = '';
  IndOptions = [
    { value: 'Computer', viewValue: 'Computer' },
    { value: 'Electrical', viewValue: 'Electrical' },
    { value: 'Mechanical', viewValue: 'Mechanical' }
  ];
  selectedIndType = '';
  empstatusOptions = [
    { value: '1-50', viewValue: '1-50' },
    { value: '50-100', viewValue: '50-100' },
    { value: '100-150', viewValue: '100-150' }
  ];
  selectedEmp = '';
  countryOptions = [
    { value: 'India', viewValue: 'India' },
    { value: 'USA', viewValue: 'USA' },
    { value: 'Australia', viewValue: 'Australia' }
  ];
  selectedcountry = '';
  stateOptions = [
    { value: 'Maharashtra', viewValue: 'Maharashtra' },
      { value: 'Washington DC', viewValue: 'Washington DC' },
      { value: 'Sydney', viewValue: 'Sydney' }
 
  ];
  selectedState = '';
  districtOptions = [
    { value: 'Mumbai', viewValue: 'OrgType1' },
    { value: 'Greenwich', viewValue: 'Greenwich' },
    { value: 'Aus', viewValue: 'Aus' }
  ];
  selecteddistrict = '';
  statusregion = [
    { value: 'East', viewValue: 'East' },
    { value: 'West', viewValue: 'West' },
    { value: 'North', viewValue: 'North' },
    { value: 'South', viewValue: 'South' }
  ];
  selectedregion = '';
  country1Options = [
    { value: 'India', viewValue: 'India' },
    { value: 'USA', viewValue: 'USA' },
    { value: 'Australia', viewValue: 'Australia' }
  ];
  selectedcountry1 = '';
  state1Options = [
    { value: 'Maharashtra', viewValue: 'Maharashtra' },
      { value: 'Washington DC', viewValue: 'Washington DC' },
      { value: 'Sydney', viewValue: 'Sydney' }
  ];
  selectedState1 = '';
  district1Options = [
    { value: 'Mumbai', viewValue: 'OrgType1' },
    { value: 'Greenwich', viewValue: 'Greenwich' },
    { value: 'Aus', viewValue: 'Aus' }
  ];
  selecteddistrict1 = '';
  region1Options = [
    { value: 'East', viewValue: 'East' },
    { value: 'West', viewValue: 'West' },
    { value: 'North', viewValue: 'North' },
    { value: 'South', viewValue: 'South' }
  ];
  selectedregion1 = '';
  Genderoptions = [
    { value: 'Male', viewValue: 'Male' },
    { value: 'Female', viewValue: 'Female' },
  
  ];
  selectedgender = '';

  onStatusChange(status: string) {
    console.log('Selected Status:', status);
  }

  // industryTypeOptions = [
  //   { value: 0, viewValue: 'Select' },
  //   { value: 1, viewValue: 'Computer' },
  //   { value: 2, viewValue: 'Electrical' },
  // ];

  // employeeCountOptions = [
  //   { value: 0, viewValue: 'Select' },
  //   { value: 1, viewValue: '1-50' },
  //   { value: 2, viewValue: '50-100' },
  // ];

  // Hardcoded input field values
  inputLabel = 'Username';
  inputPlaceholder = 'Enter your username';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Initialize form group
    this.registrationForm = this.fb.group({
      dropdownField: [null, Validators.required], // Dropdown control with validation
      username: ['', Validators.required], // Username field with validation
    });
  }

  // Handle dropdown value change
  onDropdownChange(value: any): void {
    this.registrationForm.get('dropdownField')?.setValue(value);
  }

  // Handle form submission
  onSubmit(): void {
    if (this.registrationForm.valid) {
      console.log('Form submitted:', this.registrationForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
