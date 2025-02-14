import { Component,EventEmitter, Input, Output } from '@angular/core';
import { InputfieldComponent } from '../inputfield/inputfield.component';
import { CommonModule } from '@angular/common';
import { DdComponent } from '../dd/dd.component';
import { ButtonComponent } from '../button/button.component';
import { RadioButtonComponent } from '../radio-button/radio-button.component';
import { DatepickerComponent } from '../datepicker/datepicker.component';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-popupmodal',
  imports: [
    InputfieldComponent,
    CommonModule,
    DdComponent,
    ButtonComponent,
    DatepickerComponent,
    MatIcon,
    RadioButtonComponent
],
  templateUrl: './popupmodal.component.html',
  styleUrl: './popupmodal.component.css',
})
export class PopupmodalComponent {
  isModalVisible = false;

  @Input() title: string = 'Modal Title';
  @Input() successMessage: string = '';
  @Input() formFields: any[] | undefined;
  @Input() customclasses!: string;
  @Input() ddstyle!: string;
  @Input() inputfieldstyle!: string;
  @Input() datepickerstyle!: string;
  @Input() divstyle!: string;
  @Input() buttonstyle!: string;
  @Input() divbtnstyle!: string;
  @Input() inputFields: { label: string, type?: string, placeholder?: string, class?: string }[] = [];
  @Input() dropdownFields: { label: string, options: string[] }[] = [];
  @Input() radioButtons: { label: string, options: string[] }[] = [];
  @Input() datepickerFields: { label: string; placeholder: string }[] = [];

  @Output() formSubmit = new EventEmitter<any>();

  isSuccessModalVisible = false;
  isSuccessMessageVisible = false;
  openModal() {
    this.isModalVisible = true;
  }

  closeModal() {
    this.isModalVisible = false;
  }

  stopPropagation(event: MouseEvent) {
    event.stopPropagation();
  }

  onSubmit() {
    // Show success message
    console.log(this.formFields);

   const formData = this.formFields?.reduce((acc,fields)=>{
      acc[fields.label] = fields.value || '';
      return acc;
    },{});
    this.formSubmit.emit(formData);
    this.isSuccessMessageVisible = true;
  }

  updateFieldValue(field: any, newValue: string) {
    field.value = newValue; // Update the value in formFields
  }
  closeSuccessMessage() {
    this.isSuccessMessageVisible = false;
  }
}
