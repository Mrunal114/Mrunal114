import { Component, ViewChild } from '@angular/core';
import { PopupmodalComponent } from '../../shared/popupmodal/popupmodal.component';
import { SidebarComponent } from "../../shared/sidebar/sidebar.component";
import { HeaderComponent } from "../../shared/header/header.component";
import { ButtonComponent } from "../../shared/button/button.component";
import { TableComponent } from "../../shared/table/table.component";
import { PaginatorComponent } from "../../shared/paginator/paginator.component";
import { DdComponent } from "../../shared/dd/dd.component";
import { CommonModule } from '@angular/common';
import { InputfieldComponent } from "../../shared/inputfield/inputfield.component";
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-customer-group-3',
  imports: [SidebarComponent, HeaderComponent, MatIcon, ButtonComponent, TableComponent, PaginatorComponent, DdComponent, CommonModule, InputfieldComponent, PopupmodalComponent],
  templateUrl: './Customer-Group-3.component.html',
  styleUrl: './Customer-Group-3.component.css'
})
export class CustomerGroup3Component {
  @ViewChild('popupModal') popupModal!: PopupmodalComponent;
  statusOptions = [
    { value: 'Active', viewValue: 'Active' },
    { value: 'Inactive', viewValue: 'Inactive' },
    { value: 'Pending', viewValue: 'Pending' }
  ];

  selectedStatus = '';
  formFields = [
    { type: 'inputfield', label: 'Customer Group-3', placeholder: 'Search by Customer Group-3', value: '' },
    { type: 'dd', label: 'Status', options: [
      { value: 'Active', viewValue: 'Active' },
      { value: 'Inactive', viewValue: 'Inactive' },
     
    ] },
    { type: 'inputfield', label: 'Description', placeholder: 'Enter the Description', value: '' },
   
  ];
  openPopup() {
    this.popupModal.title = 'Customer Group-3 Management';
   
    this.popupModal.openModal();
  }
}
