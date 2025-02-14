import { Component, ViewChild } from '@angular/core';
import { SidebarComponent } from "../../shared/sidebar/sidebar.component";
import { HeaderComponent } from "../../shared/header/header.component";
import { InputfieldComponent } from "../../shared/inputfield/inputfield.component";
import { DdComponent } from "../../shared/dd/dd.component";
import { ButtonComponent } from "../../shared/button/button.component";
import { TableComponent } from "../../shared/table/table.component";
import { PopupmodalComponent } from "../../shared/popupmodal/popupmodal.component";
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-newuser',
  imports: [SidebarComponent, HeaderComponent, InputfieldComponent, DdComponent, ButtonComponent, TableComponent, PopupmodalComponent,MatIcon],
  templateUrl: './newuser.component.html',
  styleUrl: './newuser.component.css'
})
export class NewuserComponent {
    @ViewChild('popupModal') popupModal!: PopupmodalComponent;
  statusOptions = [
    { value: 'Active', viewValue: 'Active' },
    { value: 'Inactive', viewValue: 'Inactive' },
    { value: 'Pending', viewValue: 'Pending' }
  ];
  selectedStatus = '';
  formFields = [
    { type: 'heading', label: 'Personal Information' },
    { type: 'inputfield', label: 'Employee Code', placeholder: 'Enter Employee Code', value: '' },
    { type: 'inputfield', label: 'First Name ', placeholder: 'Enter First Name ', value: '' },
    { type: 'inputfield', label: 'Last Name', placeholder: 'Enter Last Name', value: '' },
    { type: 'inputfield', label: 'Email ', placeholder: 'Enter Email ', value: '' },
    { type: 'inputfield', label: 'Phone No', placeholder: 'Enter Phone No', value: '' },
    { type: 'inputfield', label: 'Password ', placeholder: 'Enter Password ', value: '' },
    { type: 'dd', label: 'Main Channel', options: [
      { value: 'MH1', viewValue: 'MH1' },
      { value: 'MH2', viewValue: 'MH2' },
      { value: 'MH3', viewValue: 'MH3' }
    ] },
    { type: 'dd', label: 'Designation ', options: [
      { value: 'Software', viewValue: 'Software' },
      { value: 'Hardware', viewValue: 'Hardware' },
      { value: 'Admin', viewValue: 'Admin' }
    ] },
    { type: 'dd', label: 'Role ', options: [
      { value: 'HR', viewValue: 'HR' },
      { value: 'Developer', viewValue: 'Developer' },
      { value: 'Tester', viewValue: 'Tester' }
    ] },
    { type: 'inputfield', label: 'Manager Name', placeholder: 'Enter Manager Name', value: '' },

    { type: 'dd', label: 'Department', options: [
      { value: 'India', viewValue: 'India' },
      { value: 'USA', viewValue: 'USA' },
      { value: 'Australia', viewValue: 'Australia' }
    ] },
    { type: 'dd', label: 'Division', options: [
      { value: 'India', viewValue: 'India' },
      { value: 'USA', viewValue: 'USA' },
      { value: 'Australia', viewValue: 'Australia' }
    ] },
    { type: 'dd', label: 'Country', options: [
      { value: 'India', viewValue: 'India' },
      { value: 'USA', viewValue: 'USA' },
      { value: 'Australia', viewValue: 'Australia' }
    ] },
    { type: 'dd', label: 'Branch/Sales Office', options: [
      { value: 'Mumbai', viewValue: 'Mumbai' },
      { value: 'Thane', viewValue: 'Thane' },
      { value: 'Australia', viewValue: 'Australia' }
    ] },
    { type: 'inputfield', label: 'Region', placeholder: 'Enter Region', value: '' },
    { type: 'inputfield', label: 'State', placeholder: 'Enter State ', value: '' },
    { type: 'inputfield', label: 'District ', placeholder: 'Enter District ', value: '' },
    { type: 'dd', label: 'Country', options: [
      { value: 'Active', viewValue: 'Active' },
    { value: 'Inactive', viewValue: 'Inactive' },
    { value: 'Pending', viewValue: 'Pending' }
    ] },
  ]
  openPopup() {
    this.popupModal.title = 'Sales Office Management';
   
  
    this.popupModal.openModal();
  }
}
