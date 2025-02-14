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
  selector: 'app-item-master',
  imports: [
    SidebarComponent,
    HeaderComponent,
    ButtonComponent,
    TableComponent,
    PaginatorComponent,
    DdComponent,
    CommonModule,
    InputfieldComponent,
    MatIcon,
    PopupmodalComponent,
  ],
  templateUrl: './Item-Master.component.html',
  styleUrl: './Item-Master.component.css',
})
export class ItemMasterComponent {
  @ViewChild('popupModal') popupModal!: PopupmodalComponent;
  statusOptions = [
    { value: 'Active', viewValue: 'Active' },
    { value: 'Inactive', viewValue: 'Inactive' },
    { value: 'Pending', viewValue: 'Pending' }
  ];
  statusOptions1 = [
    { value: 'Division-0001', viewValue: 'Division-0001' },
    { value: 'Division-0002', viewValue: 'Division-0002' },
    { value: 'Division-0003', viewValue: 'Division-0003' }
  ];
  selectedStatus = '';
  formFields = [
    { type: 'inputfield', label: 'Item Code', placeholder: 'Enter Item code', value: '' },
    { type: 'dd', label: 'Item Type', options: [
      { value: 'Item-Type-0001', viewValue: 'Item-Type-0001' },
      { value: 'Item-Type-0002', viewValue: 'Item-Type-0002' },
      { value: 'Item-Type-0003', viewValue: 'Item-Type-0003' }
    ] },
    { type: 'inputfield', label: 'Price', placeholder: 'Enter the price', value: '' },
    { type: 'inputfield', label: 'Description', placeholder: 'Enter the description', value: '' },
    { type: 'inputfield', label: 'HSN Code', placeholder: 'Enter the HSN Code', value: '' },
    { type: 'dd', label: 'Division', options: [
      { value: 'Division-0001', viewValue: 'Division-0001' },
      { value: 'Division-0002', viewValue: 'Division-0002' },
      { value: 'Division-0003', viewValue: 'Division-0003' }
    ] },
    { type: 'dd', label: 'Brand', options: [
      { value: 'Brand-0001', viewValue: 'Brand-0001' },
      { value: 'Brand-0002', viewValue: 'Brand-0002' },
      { value: 'Brand-0003', viewValue: 'Brand-0003' }
    ] },
    { type: 'dd', label: 'Segment', options: [
      { value: 'Segment-0001', viewValue: 'Segment-0001' },
      { value: 'Segment-0002', viewValue: 'Segment-0002' },
      { value: 'Segment-0003', viewValue: 'Segment-0003' }
    ] },
    { type: 'dd', label: 'Category', options: [
      { value: 'Category-0001', viewValue: 'Category-0001' },
      { value: 'Category-0002', viewValue: 'Category-0002' },
      { value: 'Category-0003', viewValue: 'Category-0003' }
    ]},
   
    { type: 'dd', label: 'Main-Channel', options: [
      { value: 'Main-Channel-0001', viewValue: 'Main-Channel-0001' },
      { value: 'Main-Channel-0002', viewValue: 'Main-Channel-0002' },
      { value: 'Main-Channel-0003', viewValue: 'Main-Channel-0003' },
     
    ] },

    { type: 'dd', label: 'Sub-Channel', options: [
      { value: 'Sub-Channel-0001', viewValue: 'Sub-Channel-0001' },
      { value: 'Sub-Channel-0002', viewValue: 'Sub-Channel-0002' },
      { value: 'Sub-Channel-0003', viewValue: 'Sub-Channel-0003' },
     
    ] },
    { type: 'dd', label: 'Status', options: [
      { value: 'Active', viewValue: 'Active' },
      { value: 'Inactive', viewValue: 'Inactive' },
     
    ] },
  ];
  openPopup() {
    this.popupModal.title = 'Item Management';
    
    
    this.popupModal.openModal();
  }
}

