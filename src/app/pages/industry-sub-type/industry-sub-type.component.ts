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
  selector: 'app-industry-sub-type',
  imports: [SidebarComponent, MatIcon, HeaderComponent, ButtonComponent, TableComponent, PaginatorComponent, DdComponent, CommonModule, InputfieldComponent, PopupmodalComponent],
  templateUrl: './Industry-Sub-Type.component.html',
  styleUrl: './Industry-Sub-Type.component.css'
})
export class IndustrySubTypeComponent {
  @ViewChild('popupModal') popupModal!: PopupmodalComponent;
  statusOptions = [
    { value: 'Active', viewValue: 'Active' },
    { value: 'Inactive', viewValue: 'Inactive' },
    { value: 'Pending', viewValue: 'Pending' }
  ];

  selectedStatus = '';
  indtypeOptions = [
    { value: 'Indtype1', viewValue: 'Indtype1' },
    { value: 'Indtype2', viewValue: 'Indtype2' },
    { value: 'Indtype3', viewValue: 'Indtype3' }
  ];

  selectedInd = '';
  formFields = [
    { type: 'inputfield', label: 'Industry Sub Type', placeholder: 'Search by Industry Sub Type', value: '' },
    { type: 'inputfield', label: 'Industry Type', placeholder: 'Search by Industry Type', value: '' },
    { type: 'dd', label: 'Status', options: [
      { value: 'Active', viewValue: 'Active' },
      { value: 'Inactive', viewValue: 'Inactive' },
     
    ] },
    { type: 'inputfield', label: 'Description', placeholder: ' Enter the description', value: '' },
  ];
  openPopup() {
    this.popupModal.title = ' Enter Industry Sub Type Management';

    this.popupModal.openModal();
  }
}