import { Component, ViewChild } from '@angular/core';
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
  selector: 'app-salesarea',
  imports: [SidebarComponent, HeaderComponent, ButtonComponent, TableComponent, PaginatorComponent, DdComponent, CommonModule, InputfieldComponent, PopupmodalComponent,MatIcon],
  templateUrl: './salesarea.component.html',
  styleUrl: './salesarea.component.css'
})
export class SalesareaComponent {
   @ViewChild('popupModal') popupModal!: PopupmodalComponent;
   statusOptions = [
    { value: 'Active', viewValue: 'Active' },
    { value: 'Inactive', viewValue: 'Inactive' },
    { value: 'Pending', viewValue: 'Pending' }
  ];
  selectedStatus = '';
   formFields = [
    { type: 'dd', label: 'Sales Org', options: [
      { value: 'Sales Org1', viewValue: 'Sales Org1' },
      { value: 'Sales Org2', viewValue: 'Sales Org2' },
    ] },
    { type: 'dd', label: 'Distribution Channel', options: [
      { value: 'DC1', viewValue: 'DC1' },
      { value: 'DC2', viewValue: 'DC2' },
    ] },
    { type: 'dd', label: 'Business Division', options: [
      { value: 'BD1', viewValue: 'BD1' },
      { value: 'BD2', viewValue: 'BD2' },
    ] },
    { type: 'dd', label: 'Status', options: [
      { value: 'Active', viewValue: 'Active' },
      { value: 'Inactive', viewValue: 'Inactive' },
    ] },
  ]
    openPopup() {
      this.popupModal.title = 'Sales Area Management';
   
  
    this.popupModal.openModal();
        }
}
