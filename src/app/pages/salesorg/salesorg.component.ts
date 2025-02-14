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
  selector: 'app-salesorg',
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
    MatIcon
  ],
  templateUrl: './salesorg.component.html',
  styleUrl: './salesorg.component.css',
})
export class SalesorgComponent {
  @ViewChild('popupModal') popupModal!: PopupmodalComponent;

  formFields = [
    { type: 'inputfield', label: 'Sales Org', placeholder: 'Enter SalesOrg', value: '' },

    { type: 'dd', label: 'Status', options: [
      { value: 'Active', viewValue: 'Active' },
      { value: 'Inactive', viewValue: 'Inactive' },
    ] },
  ]
    openPopup() {
      this.popupModal.title = 'Sales Org Management';
   
  
    this.popupModal.openModal();
        }
}
