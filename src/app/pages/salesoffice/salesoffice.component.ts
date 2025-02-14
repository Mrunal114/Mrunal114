import { Component,ViewChild } from '@angular/core';
import { SidebarComponent } from "../../shared/sidebar/sidebar.component";
import { HeaderComponent } from "../../shared/header/header.component";
import { ButtonComponent } from "../../shared/button/button.component";
import { TableComponent } from "../../shared/table/table.component";
import { PaginatorComponent } from "../../shared/paginator/paginator.component";
import { DdComponent } from "../../shared/dd/dd.component";
import { CommonModule } from '@angular/common';
import { InputfieldComponent } from "../../shared/inputfield/inputfield.component";
import { PopupmodalComponent } from "../../shared/popupmodal/popupmodal.component";
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-salesoffice',
  imports: [SidebarComponent, HeaderComponent, ButtonComponent, TableComponent, PaginatorComponent, DdComponent, CommonModule, InputfieldComponent, PopupmodalComponent,MatIcon],
  templateUrl: './salesoffice.component.html',
  styleUrl: './salesoffice.component.css'
})
export class SalesofficeComponent {
  @ViewChild('popupModal') popupModal!: PopupmodalComponent;
  statusOptions = [
    { value: 'Active', viewValue: 'Active' },
    { value: 'Inactive', viewValue: 'Inactive' },
    { value: 'Pending', viewValue: 'Pending' }
  ];
  selectedStatus = '';
  formFields = [
    { type: 'inputfield', label: 'Sales Office Name', placeholder: 'Enter Sales Office Name', value: '' },
    { type: 'inputfield', label: 'Sales Office Code', placeholder: 'Enter Sales Office Name', value: '' },
    { type: 'dd', label: 'Country', options: [
      { value: 'India', viewValue: 'India' },
      { value: 'USA', viewValue: 'USA' },
      { value: 'Australia', viewValue: 'Australia' }
    ] },
    { type: 'dd', label: 'Region', options: [
      { value: 'North', viewValue: 'North' },
      { value: 'South', viewValue: 'South' },
      { value: 'East', viewValue: 'East' }
    ] },
    { type: 'dd', label: 'State', options: [
      { value: 'Maharashtra', viewValue: 'Maharashtra' },
      { value: 'Greenwood', viewValue: 'Greenwood' },
      { value: 'Sydney', viewValue: 'Sydney' }
    ] },
    { type: 'dd', label: 'District', options: [
      { value: 'Mumbai', viewValue: 'Mumbai' },
      { value: 'LA', viewValue: 'LA' },
      { value: 'Northern Sydney', viewValue: 'Northern Sydney' }
    ]},
    { type: 'inputfield', label: 'Sales Office Address1', placeholder: 'Enter Sales Office Address1', value: '' },
    { type: 'inputfield', label: 'Sales Office Address2', placeholder: 'Enter Sales Office Address2', value: '' },
    { type: 'inputfield', label: 'Sales Office Address3', placeholder: 'Enter Sales Office Address3', value: '' },
    { type: 'inputfield', label: 'Sales Office Address4', placeholder: 'Enter Sales Office Address4', value: '' },
    { type: 'dd', label: 'Status', options: [
      { value: 'Active', viewValue: 'Active' },
      { value: 'Inactive', viewValue: 'Inactive' },
     
    ] },
  ];
  openPopup() {
    this.popupModal.title = 'Sales Office Management';
   
  
    this.popupModal.openModal();
  }
  
}
