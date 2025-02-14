import { Component, ViewChild } from '@angular/core';
import { PopupmodalComponent } from '../../shared/popupmodal/popupmodal.component';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { ButtonComponent } from '../../shared/button/button.component';
import { TableComponent } from '../../shared/table/table.component';
import { PaginatorComponent } from '../../shared/paginator/paginator.component';
import { DdComponent } from '../../shared/dd/dd.component';
import { CommonModule } from '@angular/common';
import { InputfieldComponent } from '../../shared/inputfield/inputfield.component';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-itemcategory',
  imports: [
    SidebarComponent,
    HeaderComponent,
    ButtonComponent,
    TableComponent,
    PaginatorComponent,
    DdComponent,
    CommonModule,
    InputfieldComponent,
    PopupmodalComponent,
    MatIcon,
  ],
  templateUrl: './itemcategory.component.html',
  styleUrl: './itemcategory.component.css',
})
export class ItemcategoryComponent {
  @ViewChild('popupModal') popupModal!: PopupmodalComponent;
  statusOptions = [
    { value: 'Select', viewValue: 'Select' },
    { value: 'Active', viewValue: 'Active' },
    { value: 'Inactive', viewValue: 'Inactive' },
  ];
  selectedStatus = '';
  formFields = [
    {
      type: 'inputfield',
      label: 'Item Category',
      placeholder: 'Enter Item Category',
      value: '',
    },
    {
      type: 'dd',
      label: 'Status',
      options: [
        { value: 'Active', viewValue: 'Active' },
        { value: 'Inactive', viewValue: 'Inactive' },
      ],
    },
    {
      type: 'inputfield',
      label: 'Description',
      placeholder: 'Enter Description',
      value: '',
    },
  ];
  openPopup() {
    this.popupModal.title = 'Item Category Management';

    this.popupModal.openModal();
  }
}
